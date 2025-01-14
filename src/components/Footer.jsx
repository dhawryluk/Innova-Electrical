import logo from "../assets/images/innova.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";

export const Footer = () => {
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
          <p className="text-md md:text-lg">2025 Innova Electrical Inc.</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center mb-4 font-bold">
            Follow our Socials
          </h2>
          <div className="flex gap-4">
            <FaFacebook className="text-[#316FF6] text-3xl" />
            <FaInstagram className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-3xl fill-white rounded-lg" />
            <FaLinkedin className="text-[#0077B5] text-3xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
