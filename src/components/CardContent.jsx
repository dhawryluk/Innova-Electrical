import KitchenProject from "../assets/images/galleryImages/KitchenProject.jpg";
import cardImage1 from "../assets/images/galleryImages/Image10rev.jpg";
import { Link } from "react-router";

const CardContent = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 w-2/3 m-auto gap-6 my-6">
        <div className="grid bg-[#3a4750] m-auto text-[#eee] md:my-6">
          <img src={cardImage1} className="bg-cover bg-center bg-no-repeat" />
          <p className="text-xs ml-2 italic">
            Photo by{" "}
            <Link to="https://34f.ca/" className="text-neon underline">
              34F Design Inc
            </Link>{" "}
            and{" "}
            <Link
              to="https://www.upperleftphoto.com/"
              className="text-neon underline"
            >
              Upper Left Photography
            </Link>
          </p>
          <h2 className="text-2xl text-center p-2">Commercial Projects</h2>
          <p className="text-justify w-5/6 m-auto font-semibold	pb-4 leading-6">
            With years of experience and a dedication to precision, Ray has
            become a trusted expert in delivering cutting-edge electrical
            solutions tailored to the unique needs of businesses and large-scale
            developments. At Innova Electrical, Ray specializes in designing and
            implementing efficient electrical systems for office complexes,
            retail spaces, industrial facilities, and more. Whether it&apos;s
            wiring for new construction, upgrading outdated systems, or ensuring
            compliance with the latest safety standards, Ray&apos;s meticulous
            attention to detail ensures every project is completed on time,
            within budget, and to the highest standards. Renowned for his
            innovative problem-solving and commitment to client satisfaction,
            Ray is the go-to professional for businesses looking to power their
            success with reliable, state-of-the-art electrical systems. Partner
            with Ray and Innova Electrical to bring your commercial project to
            life with expertise and excellence.
          </p>
        </div>
        <div className="bg-[#3a4750] text-[#eee] md:my-6">
          <img
            src={KitchenProject}
            className="bg-cover bg-center bg-no-repeat pb-6"
          />
          <h2 className="text-2xl text-center">Residential Projects</h2>
          <p className="text-justify w-5/6 m-auto font-semibold	py-4 leading-6">
            With a passion for creating safe, reliable, and efficient electrical
            systems, Ray specializes in bringing homes to life with tailored
            solutions that meet the unique needs of every homeowner. From custom
            lighting designs to complete rewiring, Ray&apos;s expertise spans
            new home construction, renovations, and electrical upgrades. Whether
            it&apos;s installing smart home systems, enhancing energy
            efficiency, or troubleshooting existing issues, Ray delivers
            top-notch workmanship with a focus on safety and quality. With years
            of experience and a commitment to exceptional customer service, Ray
            ensures every project is completed with care and precision, creating
            homes that are both functional and beautifully lit. Choose Ray and
            Innova Electrical for all your residential electrical needs and
            experience the difference that expertise and attention to detail can
            make.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardContent;
