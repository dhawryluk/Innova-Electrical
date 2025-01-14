import BCIT from "../assets/images/companies/BCIT.png";
import Copcan from "../assets/images/companies/copcan.png";
import imageSigns from "../assets/images/companies/imageSigns.png";
import UBC from "../assets/images/companies/UBC.png";
import United from "../assets/images/companies/United.webp";
import urbanFireplace from "../assets/images/companies/urbanFireplace.png";
import VRC from "../assets/images/companies/VRC.png";
import Wise from "../assets/images/companies/Wise.png";

const Companies = () => {
  return (
    <div className="w-2/3 flex flex-col justify-center items-center m-auto bg-[#3a4750] rounded-xl p-4">
      <h2 className="text-2xl text-[#eee] text-center mb-4">
        Companies who choose to work with us!
      </h2>
      <div className=" grid grid-cols-4 lg:grid-cols-8 gap-8 bg-[#eee] p-6 rounded-xl justify-center items-center">
        <img src={UBC} />
        <img src={BCIT} />
        <img src={Copcan} />
        <img src={imageSigns} />
        <img src={United} />
        <img src={urbanFireplace} />
        <img src={VRC} />
        <img src={Wise} />
      </div>
    </div>
  );
};

export default Companies;
