import { FaStar } from "react-icons/fa";

const StarCount = ({ review }) => {
  const stars = Array(review.rating).fill(0);

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <FaStar key={index} className="text-[#e1ff00]" />
      ))}
    </div>
  );
};

export default StarCount;
