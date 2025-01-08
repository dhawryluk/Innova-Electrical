import KitchenProject from "../assets/galleryImages/KitchenProject.jpg";
import cardImage1 from "../assets/galleryImages/Image10.jpg";

const CardContent = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 w-2/3 m-auto gap-6 my-6">
        <div className="grid bg-[#3a4750] m-auto text-[#eee] md:my-6">
          <img
            src={cardImage1}
            className="bg-cover bg-center bg-no-repeat pb-6"
          />
          <h2 className="text-2xl text-center p-2">Commercial Projects</h2>
          <p className="text-justify w-5/6 m-auto font-semibold	pb-4 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus
            mi, fermentum eu faucibus at, malesuada et lectus. Morbi fermentum
            vestibulum felis, at tempus augue tincidunt tempor. Curabitur
            lobortis velit vitae eros semper efficitur et vel neque. Fusce porta
            tortor ut sodales porttitor. Integer blandit fermentum leo, quis
            vestibulum odio aliquam nec. Sed ut leo quis urna rutrum ultricies.
            Donec at placerat metus. Sed in luctus erat. Maecenas pulvinar
            lobortis dui sed dapibus.
          </p>
        </div>
        <div className="bg-[#3a4750] text-[#eee] md:my-6">
          <img
            src={KitchenProject}
            className="bg-cover bg-center bg-no-repeat pb-6"
          />
          <h2 className="text-2xl text-center">Residential Projects</h2>
          <p className="text-justify w-5/6 m-auto font-semibold	py-4 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus
            mi, fermentum eu faucibus at, malesuada et lectus. Morbi fermentum
            vestibulum felis, at tempus augue tincidunt tempor. Curabitur
            lobortis velit vitae eros semper efficitur et vel neque. Fusce porta
            tortor ut sodales porttitor. Integer blandit fermentum leo, quis
            vestibulum odio aliquam nec. Sed ut leo quis urna rutrum ultricies.
            Donec at placerat metus. Sed in luctus erat. Maecenas pulvinar
            lobortis dui sed dapibus.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardContent;
