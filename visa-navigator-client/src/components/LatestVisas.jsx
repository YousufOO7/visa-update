import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal"; // Import React Awesome Reveal
import { AuthContext } from "../provider/AuthProvider";

const LatestVisas = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  const { user } = useContext(AuthContext);

  // Fetch the latest 6 visas
  useEffect(() => {
    fetch("https://visa-navigator-server-blush.vercel.app/latest-visas?limit=6")
      .then((res) => res.json())
      .then((data) => setLatestVisas(data))
      .catch((error) => console.error("Error fetching visas:", error));
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Typewriter animation for heading */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        <Typewriter
          words={["Latest Visas"]}
          loop={2}
          cursor
          cursorStyle=""
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      {/* Visa Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestVisas.map((visa) => (
          <Fade key={visa._id} duration={1500} triggerOnce>
            {" "}
            {/* Animation on each card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={visa.countryImage}
                alt={visa.country}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 grid h-full">
                <div className="">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {visa.countryName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <strong></strong> {visa.visaType}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <strong></strong> {visa.processingTime}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <strong></strong> ${visa.fee}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <strong></strong> {visa.validity}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong></strong>{" "}
                    {visa.applicationMethod}
                  </p>
                </div>
                <Link
                  to={`/visa-details/${visa._id}`}
                  className="inline-block w-fit bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  See Details
                </Link>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {/* See All Visas Button */}
      <div className="text-center mt-8">
        <Fade duration={1000} triggerOnce>
          {
            user && user?.email ? <>  <Link
              to="/all-visas"
              className="inline-block bg-purple-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-purple-600 transition"
            >
              See All Visas
            </Link></>
              :
              <>
                <Link
                  to="/login"
                  className="inline-block bg-purple-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-purple-600 transition"
                >
                  See All Visas
                </Link>
              </>
          }
        </Fade>
      </div>
    </div>
  );
};

export default LatestVisas;
