import { FaBolt } from "react-icons/fa6";
import { Link } from "react-router";

const Error = () => {
  return (
    <>
      <div className="h-screen bg-bgPrime flex flex-col items-center justify-center text-light">
        <FaBolt className="size-48 text-neon stroke-black stroke-6 animate-bounce duration-300 ease-in" />
        <div className="text-3xl p-6">
          Error 404 - You have made a wrong turn!
        </div>
        <Link
          to="/"
          className="border border-neon py-2 px-4 rounded-md font-bold hover:bg-neon hover:text-black"
        >
          Turn Back
        </Link>
      </div>
    </>
  );
};

export default Error;
