import  { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking link sent to your email after shipping.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping fees may apply.",
    },
  ];

  return (
    <div className="w-full mx-auto my-10 p-6 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 dark:border-gray-600"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-lg font-medium text-left text-gray-800 dark:text-gray-200"
            >
              <span>{faq.question}</span>
              <span className="transform transition-transform duration-300">
                {open === index ? "−" : "+"}
              </span>
            </button>
            {open === index && (
              <p className="text-gray-600 dark:text-gray-300 pl-4 pb-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
