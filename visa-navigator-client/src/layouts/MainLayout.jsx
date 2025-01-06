import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";


export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-violet-100 dark:from-gray-800 dark:to-gray-900">
      {/* <ToastContainer /> */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* main content  */}
      <main className="flex-grow my-5">
        <div className="container mx-auto px-6">
          <Outlet />
        </div>
      </main>

      {/* footer  */}
      <Footer />
    </div>
  );
}
