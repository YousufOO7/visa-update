
import { Fade, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const VisaHighlights = () => {
  return (
    <div className="  py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <Fade>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to{" "}
            <span className="text-blue-500">
              <Typewriter
                words={["Visa Navigator", "Your Travel Partner"]}
                loop={false}
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </h2>
        </Fade>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover a seamless visa application process, tailored guidance, and
          real-time updates.
        </p>
      </div>
      <Slide direction="up" cascade>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-500">
              Step-by-Step Guidance
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Comprehensive support for every visa application process.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-500">
              Real-Time Updates
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Stay informed with instant updates on your visa status.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-500">
              24/7 Support
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Dedicated assistance from our visa experts anytime.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default VisaHighlights;
