import { useState, useEffect } from "react";
import data from "../gallery.json";
import { FaBoltLightning } from "react-icons/fa6";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [zoomImage, setZoomImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(data.gallery);
    setLoading(false);
  }, []);

  const handleClick = (image) => {
    setZoomImage(image);
  };

  const closeModal = () => {
    setZoomImage(null);
  };

  return (
    <>
      <h1 className="text-center text-3xl text-light my-6">
        Welcome to our Project Gallery
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <FaBoltLightning className="animate-pulse w-36 h-36 text-neon" />
        </div>
      ) : (
        <div className="w-5/6 m-auto columns-1 sm:columns-2 md:columns-3 my-6 md:my-12 gap-4 overflow-hidden transition-shadow">
          {images.map((image, id) => (
            <div
              key={id}
              onClick={() => handleClick(image)}
              className="group relative overflow-hidden mb-4 break-inside-avoid cursor-pointer"
            >
              <img
                src={image.image}
                className="w-full h-full object-cover rounded-lg"
                alt={`Gallery image ${id}`}
                loading="lazy"
              />
              <div className="absolute h-fit w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-lg text-center italic text-light opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2">
                  {image.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeModal}
        >
          <img
            src={zoomImage.image}
            className="max-w-full max-h-full rounded-lg"
            alt="Zoomed"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
