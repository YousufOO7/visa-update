import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyApplications = () => {
  const allVisas = useLoaderData();
  const { user } = useContext(AuthContext);

  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query

  // Fetch all visas and filter by applied_date and matched userEmail
  useEffect(() => {
    const fetchApplications = () => {
      // Check if user email exists and allVisas is not empty
      if (!user?.email || !allVisas || allVisas.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const filteredApplications = allVisas.filter(
          (visa) =>  visa.visaApplicantEmail === user.email
        );

        setApplications(filteredApplications);
        setFilteredApplications(filteredApplications);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false); // Always stop loading
      }
    };

    fetchApplications();
  }, [allVisas, user?.email]);

  // Handle search functionality
  const handleSearch = () => {
    const filtered = applications.filter((visa) =>
      visa.countryName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  // Handle cancel application
  const handleCancel = (visaId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this application?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://visa-navigator-server-blush.vercel.app/visa-details/${visaId}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ applied_date: null }),
            }
          );

          if (response.ok) {
            setFilteredApplications((prev) =>
              prev.filter((application) => application._id !== visaId)
            );
            Swal.fire(
              "Cancelled!",
              "Your application has been cancelled.",
              "success"
            );
          } else {
            Swal.fire("Error", "Failed to cancel the application.", "error");
          }
        } catch (error) {
          console.error("Error cancelling application:", error);
          Swal.fire("Error", "Something went wrong.", "error");
        }
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        My Applications
      </h2>
      {/* Search Section */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          className="border rounded-lg p-2 dark:bg-gray-800 dark:text-white"
          placeholder="Search by Country"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {filteredApplications.length === 0 ? (
        <p className="text-center text-gray-500">No applications found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApplications.map((visa) => (
            <div
              key={visa._id}
              className=" border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden pb-4 bg-white dark:bg-gray-900 dark:text-white grid items-end transition-transform transform hover:scale-105 duration-300"
            >
              <div>
                <div className="px-4 pt-1">
                  <img
                    src={visa.countryImage}
                    alt={visa.countryName}
                    className="h-40 w-full object-cover rounded-lg "
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{visa.countryName}</h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-1">
                    <strong>Visa Type:</strong> {visa.visaType}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-1">
                    <strong>Processing Time:</strong> {visa.processingTime}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-1">
                    <strong>Fee:</strong> ${visa.fee}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-1">
                    <strong>Validity:</strong> {visa.validity}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-1">
                    <strong>Application Method:</strong>{" "}
                    {visa.applicationMethod}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-1">
                    <strong>Applied Date:</strong>{" "}
                    {new Date(visa.applied_date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-1">
                    <strong>Applicants Name:</strong>{" "}
                    {visa.first_name + " " + visa.last_name}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-4">
                    <strong>Applicants Email:</strong> {visa.visaApplicantEmail}
                  </p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleCancel(visa._id)}
                    className="bg-red-500 text-white py-2 px-4 w-[90%] rounded hover:bg-red-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplications;
