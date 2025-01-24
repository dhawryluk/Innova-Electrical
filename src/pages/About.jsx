import Ray from "/AiRay.png";
import TSBC from "../assets/images/images/tsbc_logo.png";
import redSeal from "../assets/images/images/redSeal.png";

const About = () => {
  return (
    <>
      <div className="w-5/6 m-auto py-12 gap-6 text-light grid lg:grid-cols-2 justify-center ">
        <div className="">
          <h1 className="text-3xl text-center">Who is Innova Electrical?</h1>
          <p className="text-md text-justify p-4">
            <p className="inline-block text-4xl text-neon font-mono">I</p>
            <span>
              nnova Electrical is a leading provider of electrical services,
              bringing decades of expertise and dedication to every project. As
              a certified FSR Master Electrician
            </span>{" "}
            <p className="inline-block text-neon">
              Certification #CEL010103379
            </p>{" "}
            and holder of TSBC - Technical Safety BC{" "}
            <p className="inline-block text-neon">License #LEL0200120</p> Innova
            Electrical combines top-tier credentials with a passion for
            delivering exceptional electrical services. Our commitment to
            excellence extends across both commercial and residential projects.
            Whether designing complex electrical systems for businesses or
            upgrading home wiring, our focus on safety, innovation, and client
            satisfaction sets them apart. Known for our hands-on approach and
            attention to detail, Innova Electrical ensures every job is
            completed to the highest industry standards. Outside the job site,
            we are passionate about staying at the forefront of electrical
            advancements, regularly updating our skills and certifications to
            align with evolving technology and regulations. With a proven track
            record and a reputation for reliability, Innova Electrical is
            dedicated to powering success for every client.
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
