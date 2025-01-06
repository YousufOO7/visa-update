import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading"; // Import Loading component
import { Fade } from "react-awesome-reveal"; // Import React Awesome Reveal for animation

const AllVisas = () => {
  // State for managing loading and visa types
  const [loading, setLoading] = useState(true);
  const [selectedVisaType, setSelectedVisaType] = useState(""); // For storing selected visa type
  const loadedAllVisas = useLoaderData();
  const [allVisas, setAllVisas] = useState([]);

  // Effect to set all visas after data is loaded
  useEffect(() => {
    setTimeout(() => {
      setAllVisas(loadedAllVisas);
      setLoading(false); // Set loading to false after data is loaded
    }, 100); // Simulated delay (adjust as needed)
  }, [loadedAllVisas]);

  // Handle the filter change
  const handleFilterChange = (e) => {
    setSelectedVisaType(e.target.value);
  };

  // Filter the visas based on selected visa type
  const filteredVisas = selectedVisaType
    ? allVisas.filter((visa) => visa.visaType === selectedVisaType)
    : allVisas;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        All Visas
      </h2>
      {/* Dropdown Menu for filtering */}
      <div className="mb-8 flex justify-center">
        <select
          value={selectedVisaType}
          onChange={handleFilterChange}
          className="p-2 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
        >
          <option value="" disabled>
            Select Visa Type
          </option>
          <option value="Tourist Visa">Tourist Visa</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Official Visa">Official Visa</option>
          <option value="Work Visa">Work Visa</option>
        </select>
      </div>

      {loading ? (
        // Show the Loading component when loading
        <div className="flex justify-center items-center h-40">
          <Loading />
        </div>
      ) : filteredVisas.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No visas available for the selected type.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVisas.map((visa) => (
            <Fade key={visa._id} duration={1000} triggerOnce>
              {" "}
              {/* Animation for each visa card */}
              <div className="bg-white border dark:border-gray-700 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300">
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {visa.countryName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <strong></strong> {visa.visaType}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <strong></strong> ${visa.fee}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <strong></strong> {visa.validity}
                  </p>
                  <Link
                    to={`/visa-details/${visa._id}`}
                    className="inline-block bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600 transition"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVisas;
