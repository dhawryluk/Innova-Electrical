import logo from "../assets/images/innova.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="flex bg-[#eee] p-6 mt-6">
        <img
          src={logo}
          alt="Logo"
          className="h-36 border-r-4 border-red-800 pr-6"
        />
        <div className="flex flex-col justify-center items-center m-auto">
          <h2 className="text-2xl mb-6 font-bold">Follow our Socials</h2>
          <div className="flex gap-4">
            <FaFacebook className="text-[#316FF6] text-3xl" />
            <FaInstagram className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-3xl fill-white rounded-lg" />
            <FaLinkedin className="text-[#0077B5] text-3xl" />
          </div>
          <p className="text-xs m-4">Copyright Innova Electrical Inc.</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
