import { FaShield, FaClipboardCheck, FaCertificate } from "react-icons/fa6";

function Highlight() {
  return (
    <>
      <div className="w-2/3 m-auto grid grid-cols-3 text-neon text-6xl md:text-9xl my-6">
        <div className="flex flex-col items-center gap-4">
          <FaShield />
          <h2 className="text-white text-xl text-center">
            Satisfaction Guarantee
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <FaClipboardCheck />
          <h2 className="text-white text-xl text-center">Free Estimates</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <FaCertificate />
          <h2 className="text-white text-xl text-center">Licensed & Insured</h2>
        </div>
      </div>
    </>
  );
}

export default Highlight;
