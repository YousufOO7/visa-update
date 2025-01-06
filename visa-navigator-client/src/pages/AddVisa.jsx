import { useState, useContext, useRef } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddVisa = () => {
  const { user } = useContext(AuthContext); // Access the logged-in user's data
  const userEmail = user?.email || ""; // Get the email or fallback to an empty string
  const checkboxesRef = useRef([]); // Reference for checkboxes
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
    visaCreatorEmail: userEmail,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      requiredDocuments: checked
        ? [...prev.requiredDocuments, value]
        : prev.requiredDocuments.filter((doc) => doc !== value),
    }));
  };

  // Form submission handler
  const handleAddVisa = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://visa-navigator-server-blush.vercel.app/add-visa",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire("Success!", "Visa added successfully!", "success");
        setFormData({
          countryImage: "",
          countryName: "",
          visaType: "",
          processingTime: "",
          requiredDocuments: [],
          description: "",
          ageRestriction: "",
          fee: "",
          validity: "",
          applicationMethod: "",
          visaCreatorEmail: userEmail,
        });

        // Reset checkboxes manually
        checkboxesRef.current.forEach((checkbox) => {
          if (checkbox) checkbox.checked = false;
        });
      } else {
        Swal.fire("Error!", "Failed to add visa. Please try again.", "error");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      Swal.fire("Error!", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md my-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        Add a Visa
      </h2>

      <form onSubmit={handleAddVisa}>
        {/* Country Name */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Country Name
          </label>
          <input
            type="text"
            name="countryName"
            value={formData.countryName}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            placeholder="Enter Country Name"
            required
          />
        </div>

        {/* Country Image */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Country Image URL
          </label>
          <input
            type="text"
            name="countryImage"
            value={formData.countryImage}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            placeholder="Enter Image URL"
            required
          />
        </div>

        {/* Visa Type */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Visa Type
          </label>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            required
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

        {/* Processing Time */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Processing Time
          </label>
          <input
            type="text"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            placeholder="Enter Processing Time"
            required
          />
        </div>

        {/* Required Documents */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Required Documents
          </label>
          <div>
            {[
              "Valid Passport",
              "Visa Application Form",
              "ID Card",
              "Recent Photograph",
            ].map((doc, index) => (
              <label className="inline-flex items-center mr-4" key={doc}>
                <input
                  type="checkbox"
                  value={doc}
                  onChange={handleCheckboxChange}
                  ref={(el) => (checkboxesRef.current[index] = el)} // Add ref
                  className="text-blue-600 dark:text-blue-400"
                />
                <span className="ml-2 text-gray-800 dark:text-gray-100">
                  {doc}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            placeholder="Enter Visa Description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Age Restriction */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Age Restriction
          </label>
          <input
            type="number"
            name="ageRestriction"
            value={formData.ageRestriction}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            placeholder="Enter Age Restriction"
            required
          />
        </div>

        {/* Fee */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Fee
          </label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            placeholder="Enter Visa Fee"
            required
          />
        </div>

        {/* Validity */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Validity
          </label>
          <input
            type="text"
            name="validity"
            value={formData.validity}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            placeholder="Enter Visa Validity"
            required
          />
        </div>

        {/* Application Method */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Application Method
          </label>
          <input
            type="text"
            name="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded"
            placeholder="Enter Application Method"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-fit bg-blue-500 text-white p-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Add Visa
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
