import gallery from "../gallery.json";
import { useState } from "react";

export default function Gallery() {
  const [zoomImage, setZoomImage] = useState(null); // Store the clicked image

  const handleClick = (image) => {
    setZoomImage(image); // Set the clicked image
  };

  const closeModal = () => {
    setZoomImage(null); // Close the modal
  };

  return (
    <>
      <h1 className="text-center text-3xl text-[#eee] my-6">
        Welcome to our Project Gallery
      </h1>
      <div className="w-5/6 m-auto columns-1 sm:columns-2 md:columns-3 my-6 md:my-12 gap-4 overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        {gallery.map((image, id) => (
          <div
            key={id}
            onClick={() => handleClick(image)}
            className="group relative overflow-hidden mb-4 break-inside-avoid cursor-pointer"
          >
            <img
              src={image.image}
              className="w-full h-full object-cover rounded-lg"
              alt={`Gallery image ${id}`}
            />
            <div class="absolute h-fit w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p class="text-lg text-center italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.name}
              </p>
            </div>
          </div>
        ))}
      </div>
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
}
