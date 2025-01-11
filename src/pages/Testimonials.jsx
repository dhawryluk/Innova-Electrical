import review from "../reviews.json";
import StarCount from "../components/StarCount";

function Testimonials() {
  return (
    <div className="pt-6 w-1/2 m-auto">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-center p-6 text-[#eee]">
        What our Wonderful Clients have to say!
      </h1>
      {review.map((review) => (
        <div
          key={review.id}
          className="border-t-2 border-[#e1ff00] text-white p-4"
        >
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl italic font-semibold">{review.name}</h2>
            <StarCount review={review} />
          </div>
          <p className="text-justify py-4">{review.review}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
