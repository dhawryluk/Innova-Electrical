import reviews from "../reviews.json";
import { Link } from "react-router-dom";
import StarCount from "../components/StarCount";

function Review() {
  const recentReviews = reviews.slice(0, 1);

  return (
    <div className="pt-6">
      {recentReviews.map((review) => (
        <div
          key={review.id}
          className="border-t-2 border-b-2 border-[#e1ff00] w-2/3 m-auto text-white p-4"
        >
          <h1 className="text-2xl text-center p-2">
            What our Clients are Saying
          </h1>
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl italic font-semibold">{review.name}</h2>
            <StarCount review={review} />
          </div>
          <p className="text-justify py-4">{review.review}</p>
          <Link
            to="/Testimonials"
            className="flex justify-self-end border border-[#e1ff00] py-2 px-4 rounded-md font-bold hover:bg-[#e1ff00] hover:text-black"
          >
            See More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Review;
