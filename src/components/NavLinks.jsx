import { NavLink } from "react-router";

const NavLinks = ({ closeMenu }) => {
  console.log(closeMenu);
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-innova text-light hover:bg-bgPrime hover:text-light rounded-md px-3 py-2"
      : "text-black hover:bg-bgPrime hover:text-light rounded-md px-3 py-2";

  return (
    <>
      <NavLink to="/" className={linkClass} onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink to="/Gallery" className={linkClass} onClick={closeMenu}>
        Gallery
      </NavLink>
      <NavLink to="/Reviews" className={linkClass} onClick={closeMenu}>
        Testimonials
      </NavLink>
      <NavLink to="/About" className={linkClass} onClick={closeMenu}>
        About Us
      </NavLink>
      <NavLink to="Contact" className={linkClass} onClick={closeMenu}>
        Contact
      </NavLink>
    </>
  );
};

export default NavLinks;
