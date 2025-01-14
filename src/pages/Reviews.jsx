import ReviewListings from "../components/ReviewListings";

const Reviews = () => {
  return (
    <div className="pt-6 m-auto">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-center p-6 text-[#eee]">
        What our Wonderful Clients have to say!
      </h1>
      <ReviewListings />
    </div>
  );
};

export default Reviews;
