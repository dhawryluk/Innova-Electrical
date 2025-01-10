import { Link } from "react-router";
import images from "../gallery.json";

const Gallery = () => {
  return (
    <div className="w-5/6 m-auto columns-1 md:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
      {images.map((images, id) => (
        <div key={id} className="mb-4 break-inside-avoid">
          <Link>
            <img
              src={images.image}
              className="w-full object-cover rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
