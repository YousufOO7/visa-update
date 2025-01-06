import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading"; // Import Loading component

const AllVisas = () => {
  // State for managing loading and visa types
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("all"); // Default is "all"
  const loadedAllVisas = useLoaderData();
  const [allVisas, setAllVisas] = useState([]);

  // Effect to set all visas after data is loaded
  useEffect(() => {
    setTimeout(() => {
      setAllVisas(loadedAllVisas);
      setLoading(false); // Set loading to false after data is loaded
    }, 100); // Simulated delay (adjust as needed)
  }, [loadedAllVisas]);

  // Handle sort change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Sort visas by fee based on sort order
  const sortedVisas =
    sortOrder === "all"
      ? allVisas
      : [...allVisas].sort((a, b) => {
          if (sortOrder === "ascending") {
            return a.fee - b.fee;
          } else {
            return b.fee - a.fee;
          }
        });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        All Visas
      </h2>
      {/* Dropdown Menu for filtering */}
      <div className="mb-8 flex justify-center">
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="p-2 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
        >
          <option value="all">Show All</option>
          <option value="ascending">Sort by Fee: Low to High</option>
          <option value="descending">Sort by Fee: High to Low</option>
        </select>
      </div>

      {loading ? (
        // Show the Loading component when loading
        <div className="flex justify-center items-center h-40">
          <Loading />
        </div>
      ) : sortedVisas.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No visas available for the selected type.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Country Image</th>
                <th>Country Name</th>
                <th>Visa Type</th>
                <th>Visa Fee</th>
                <th>Visa Validity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedVisas.map((visa, idx) => (
                <tr key={visa._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={visa.countryImage}
                            alt={visa.countryName}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{visa.countryName}</td>
                  <td>{visa.visaType}</td>
                  <td>{visa.fee}</td>
                  <td>{visa.validity}</td>
                  <th>
                    <Link
                      to={`/visa-details/${visa._id}`}
                      className="inline-block bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                      See Details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllVisas;
