import { NavLink } from "react-router";

function NavLinks({ closeMenu }) {
  console.log(closeMenu);
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-[#721416] text-white hover:bg-black hover:text-white rounded-md px-3 py-2"
      : "text-black hover:bg-black hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <NavLink to="/" className={linkClass} onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink to="/Gallery" className={linkClass} onClick={closeMenu}>
        Gallery
      </NavLink>
      <NavLink to="/Testimonials" className={linkClass} onClick={closeMenu}>
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
}

export default NavLinks;

// export default function NavLinks({ closeMenu }) {
//   const linkStyles =
//     "hover:bg-[#7E1416] hover:text-white p-4 hover:p-4 rounded-full ease-in duration-200";

//   return (
//     <>
//       <NavLink to="/" className={linkStyles} onClick={closeMenu}>
//         Home
//       </NavLink>
//       <NavLink to="/Gallery" className={linkStyles} onClick={closeMenu}>
//         Gallery
//       </NavLink>
//       <NavLink to="/Testimonials" className={linkStyles} onClick={closeMenu}>
//         Testimonials
//       </NavLink>
//       <NavLink to="/Contact" className={linkStyles} onClick={closeMenu}>
//         Contact Us
//       </NavLink>
//     </>
//   );
// }
