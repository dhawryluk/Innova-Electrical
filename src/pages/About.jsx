import Ray from "/AiRay.png";
import TSBC from "../assets/images/images/tsbc_logo.png";
import redSeal from "../assets/images/images/redSeal.png";

const About = () => {
  return (
    <>
      <div className="w-5/6 m-auto py-12 gap-6 text-[#eee] grid lg:grid-cols-2 justify-center ">
        <div className="">
          <h1 className="text-3xl text-center">Who is Innova Electrical?</h1>
          <p className="text-md text-justify p-4">
            <p className="inline-block text-2xl text-neon">R</p>ay is the proud
            owner of Innova Electrical, bringing decades of expertise and
            dedication to every project. As a certified FSR Master Electrician{" "}
            <p className="inline-block text-neon">
              Certification #CEL010103379
            </p>{" "}
            and holder of TSBC - Technical Safety BC{" "}
            <p className="inline-block text-neon">License #LEL0200120</p> Ray
            combines top-tier credentials with a passion for delivering
            exceptional electrical services. Ray&apos;s commitment to excellence
            extends across both commercial and residential projects. Whether
            designing complex electrical systems for businesses or upgrading
            home wiring, his focus on safety, innovation, and client
            satisfaction sets him apart. Known for his hands-on approach and
            attention to detail, Ray ensures every job is completed to the
            highest industry standards. Outside the job site, Ray is passionate
            about staying at the forefront of electrical advancements, regularly
            updating his skills and certifications to align with evolving
            technology and regulations. With a proven track record and a
            reputation for reliability, Ray is dedicated to powering success for
            every client.
          </p>
          <div className="grid grid-cols-2 p-4 justify-center items-center">
            <img src={redSeal} />
            <img src={TSBC} />
          </div>
        </div>
        <img src={Ray} className="rounded-xl my-6" />
      </div>
    </>
  );
};

export default About;
