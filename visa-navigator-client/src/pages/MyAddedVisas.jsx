import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import UpdateVisaModal from "./UpdateVisaModal"; // Import the modal component

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [myAddedVisas, setMyAddedVisas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    fetch("https://visa-navigator-server-blush.vercel.app/all-visas")
      .then((response) => response.json())
      .then((data) => {
        // filter visas based on user email
        const filteredVisas = data.filter(
          (visa) => visa.visaCreatorEmail === user?.email
        );
        setMyAddedVisas(filteredVisas);
      });
  }, [user.email]); // when user email changes, update visas

  const handleUpdate = (updatedVisa) => {
    fetch(
      `https://visa-navigator-server-blush.vercel.app/visa-update/${updatedVisa._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedVisa),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setMyAddedVisas((prev) =>
            prev.map((visa) =>
              visa._id === updatedVisa._id ? updatedVisa : visa
            )
          );
          Swal.fire("Success!", "Visa updated successfully!", "success");
          setShowModal(false); // close modal after update
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://visa-navigator-server-blush.vercel.app/visa-details/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyAddedVisas((prev) => prev.filter((visa) => visa._id !== id));
              Swal.fire("Deleted!", "Your visa has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-6 dark:bg-gray-800 dark:text-gray-200 transition-all duration-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">
        My Added Visas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myAddedVisas.map((visa) => (
          <div
            key={visa._id}
            className="card bg-gray-100 dark:bg-gray-700 shadow-md p-4 grid items-end transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div>
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-40 object-cover mb-4 rounded-lg "
              />
              <h2 className="text-xl font-bold mb-2">{visa.countryName}</h2>
              <p className="mb-1">
                <strong>Visa Type: </strong>
                {visa.visaType}
              </p>
              <p className="mb-1">
                <strong>Processing Time: </strong>
                {visa.processingTime}
              </p>
              <p className="mb-1">
                <strong>Fee: $</strong>
                {visa.fee}
              </p>
              <p className="mb-1">
                <strong>Validity: </strong>
                {visa.validity}
              </p>
              <p className="mb-1">
                <strong>Application Method: </strong>
                {visa.applicationMethod}
              </p>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-emerald-500 text-white py-2 px-6 rounded hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  setSelectedVisa(visa); // set selected visa
                  setShowModal(true); // show modal
                }}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                onClick={() => handleDelete(visa._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <UpdateVisaModal
          selectedVisa={selectedVisa}
          setShowModal={setShowModal}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default MyAddedVisas;
