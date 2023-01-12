import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import Logo from "../assets/images/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-footerBg px-6 pt-72 text-white">
      <div className="container mx-auto">
        <img src={Logo} alt="logo" className="w-52" />
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:py-12">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="mt-8 flex gap-8 lg:mt-0">
              <HiLocationMarker className="mt-1 flex-shrink-0 text-2xl text-white" />
              <p className="max-w-xs text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-8 text-white">
                <HiPhone className="text-2xl text-white" />
                <p>+1-543-123-4567</p>
              </div>
              <div className="flex gap-8 text-white">
                <HiMail className="text-2xl text-white" />
                <p>example@fylo.com</p>
              </div>
            </div>
          </div>
          <nav className="mt-24 flex flex-col gap-y-4 font-medium text-neutral-300 lg:mt-0">
            <a href="#" className="transition hover:text-white">
              About Us
            </a>
            <a href="#" className="transition hover:text-white">
              Jobs
            </a>
            <a href="#" className="transition hover:text-white">
              Press
            </a>
            <a href="#" className="transition hover:text-white">
              Blog
            </a>
          </nav>
          <nav className="mt-8 flex flex-col gap-y-4 font-medium text-neutral-300 lg:mt-0">
            <a href="#" className="transition hover:text-white">
              Contact Us
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
          </nav>
          <div className="my-16 flex items-center justify-center gap-4 lg:my-0 lg:items-start">
            <FaFacebook className="cursor-pointer text-2xl transition hover:text-blue-400" />
            <FaTwitter className="cursor-pointer text-2xl transition hover:text-sky-400" />
            <FaInstagram className="cursor-pointer text-2xl transition hover:text-pink-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
