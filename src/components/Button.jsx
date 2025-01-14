import { Link } from "react-router";

const Button = () => {
  return (
    <Link
      to="/Reviews"
      className="flex justify-self-end border border-neon py-2 px-4 rounded-md font-bold hover:bg-neon hover:text-black"
    >
      See More
    </Link>
  );
};

export default Button;
