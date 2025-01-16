import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import logo from "../assets/images/images/innova1.png";
import { FaBars, FaX } from "react-icons/fa6";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-[#eee] p-2 hidden md:flex md:justify-between">
        <img src={logo} alt="Logo" className="h-24" />
        <ul className="hidden md:flex text-lg font-bold gap-6 self-center">
          <NavLinks closeMenu={closeMenu} />
        </ul>
      </nav>
      <div className="bg-[#eee]">
        <div className="md:hidden bg-[#eee] p-4 flex flex-row-reverse justify-between items-center">
          <img src={logo} alt="Logo" className="w-[15%]" />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden bg-[#303841] h-fit text-white p-2 rounded-lg ease-in-out duration-300 "
          >
            {!isOpen ? (
              <FaBars className="h-6 w-6" />
            ) : (
              <FaX className="h-6 w-6" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-8 py-10 items-center text-xl bg-[#eee]">
            <NavLinks closeMenu={closeMenu} />
          </div>
        )}
      </div>
    </>
  );
}
export default NavBar;
