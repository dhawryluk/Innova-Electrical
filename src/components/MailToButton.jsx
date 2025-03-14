import { Link } from "react-router";

const MailToButton = ({ mailto, label }) => {
  return (
    <Link
      className="bg-innova hover:bg-innova/70 text-white font-semibold py-2 px-4 rounded-md transition-all ease-in-out duration-300"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default MailToButton;
