import hero from "/pexels-caio-11331744.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-bgSecondary bg-blend-lighten">
        <img src={hero} className="md:size-3/4 lg:size-2/3" />
        <h1 className="self-center text-center text-light font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl p-6 md:leading-10">
          Providing exceptional service to the Greater Vancouver and North
          Okanagan regions since 2009
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
