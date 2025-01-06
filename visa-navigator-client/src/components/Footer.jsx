import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import footerImg from '../assets/visa1.png'

const Footer = () => {
  return (
    <footer className="text-white bg-blue-500 dark:bg-gray-900  dark:text-gray-200 py-10 mt-10">
      <div className="container mx-auto px-4 justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Brand and Description */}
        <div>
          <div className="flex gap-2 items-center">
            <img src={footerImg} className="w-12 h-12" alt="" />
          <h2 className="text-2xl font-bold mb-3">Visa Navigator</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted partner for visa applications.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/Mdyousufjobaer"
              className="text-white dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 rounded-full"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/yousuf-jobaer-099b9832b/"
              className="text-white dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 rounded-full"
            >
              <FaLinkedin className="text-2xl"></FaLinkedin>
            </a>
            <a
              href="https://www.instagram.com/yousuf_jobaer_/"
              className="text-white dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 rounded-full"
            >
              <FaInstagramSquare className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
          <form className="grid space-y-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-2 text-gray-800 dark:text-gray-900 dark:bg-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white text-center font-bold rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 mx-8 pt-4 text-center text-sm">
        Copyright © 2024. <b>Visa Navigator</b> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
