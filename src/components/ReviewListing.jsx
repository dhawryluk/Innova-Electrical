import StarCount from "./StarCount";

const ReviewListing = ({ review }) => {
  return (
    <>
      <div className="flex justify-between items-baseline border-t-2 border-neon pt-4">
        <h2 className="text-xl italic font-semibold">{review.name}</h2>
        <StarCount review={review} />
      </div>
      <p className="text-justify py-4">{review.review}</p>
    </>
  );
};

export default ReviewListing;
