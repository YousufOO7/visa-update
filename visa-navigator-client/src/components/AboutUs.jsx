const AboutUs = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    About Us
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                    Welcome to <span className="font-bold text-blue-500">Visa Navigator</span>, your trusted companion in navigating the world of international travel and visa applications. We simplify the complex process of obtaining visas, empowering you to focus on your dreams.
                </p>
            </div>
            <div className="container mx-auto grid md:grid-cols-3 gap-6">
                {/* Who We Are */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        Who We Are
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        We are a team of travel enthusiasts and visa experts committed to providing accurate and reliable guidance for all your visa needs.
                    </p>
                </div>
                {/* What We Offer */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        What We Offer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        From step-by-step visa instructions to the latest updates on travel policies, we provide everything you need for a hassle-free visa application process.
                    </p>
                </div>
                {/* Why Choose Us */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        Why Choose Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        With trusted expertise, dedicated support, and up-to-date information, we make your visa journey seamless and stress-free.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
