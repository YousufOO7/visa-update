const Newsletter = () => {
  return (
    <div className="grid grid-cols-4 items-center justify-between bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-10">
      <div className="col-span-3">
        {/* Text Section */}
        <div className="flex-1 mb-6 gap-1">
          <h5 className="text-sm text-gray-500 dark:text-gray-400 uppercase my-2">
            Newsletter
          </h5>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Subscribe to the free newsletter
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            to receive the latest news & case studies!
          </p>
        </div>

        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <input
            type="email"
            placeholder="Your e-mail address"
            className="p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="col-span-1 flex-1 hidden md:flex items-center justify-center w-fit">
        <img
          src="https://evisa-react.xpressbuddy.com/static/media/newsletter_img.9a66cfc2f3a006936f6c.png" // Change this to your image path
          alt="Newsletter"
          className="max-h-64 object-contain"
        />
      </div>
    </div>
  );
};

export default Newsletter;
