import hero from "/shopHero.jpg";
import logo from "/innova.png";

const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[80vh] flex flex-col md:flex-row items-center md:items-start justify-between"
        style={{
          backgroundImage: `url('${hero}')`,
        }}
      >
        <img src={logo} alt="Logo" className="h-56 mt-6" />
        <h1 className="bg-bgPrime/60 flex md:self-end h-fit md:w-1/3 rounded-tl-xl text-center text-light font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl p-6 md:leading-10">
          Servicing to the Greater Vancouver and North Okanagan regions since
          2009
        </h1>
      </div>

      <div className="bg-bgPrime py-6">
        <h3 className="border-t-2 border-b-2 border-neon text-light text-center m-auto w-7/8 md:w-2/3 py-4 px-6">
          OUR OBJECTIVE IS TO PROVIDE THE HIGHEST PROFESSIONAL ELECTRICAL WORK
          BY ABIDING TO LEGAL STANDARDS AND KEEPING CUSTOMER&apos;S PERSONAL
          WELFARE AS OUR PRIMARY OBJECTIVE.
        </h3>
      </div>
    </>
  );
};

export default Hero;
