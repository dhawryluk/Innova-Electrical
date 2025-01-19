import logo from "../assets/images/images/innova.png";
import { Link } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";

export const Footer = () => {
  const d = new Date();
  let currentYear = d.getFullYear();

  return (
    <footer className="items-center bg-[#eee] p-6 mt-6">
      <div className="grid md:grid-cols-3 items-center w-full">
        <div className="">
          <img
            src={logo}
            alt="Logo"
            className="hidden md:block h-36 md:border-r-4 md:border-red-800 pr-6"
          />
        </div>
        <div className="mb-2 md:mb-0 md:mt-6 flex gap-2 text-sm items-center justify-center self-end w-full">
          <FaRegCopyright />
          <p className="text-md md:text-lg">
            {currentYear} Innova Electrical Ltd.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center mb-4 font-bold">
            Follow our Socials
          </h2>
          <div className="flex gap-4">
            <Link to="https://www.facebook.com/InnovaElectrical/">
              <FaFacebook className="text-[#316FF6] text-3xl" />
            </Link>
            <Link to="https://www.instagram.com/innovaelectrical/">
              <FaInstagram className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-3xl fill-white rounded-lg" />
            </Link>
            <Link to="https://www.linkedin.com/in/ray-bergmann-a12303164/">
              <FaLinkedin className="text-[#0077B5] text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
