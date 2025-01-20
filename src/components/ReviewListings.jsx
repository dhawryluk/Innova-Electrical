import { useState, useEffect } from "react";
import ReviewListing from "./ReviewListing";
import Button from "../components/Button";
import data from "../reviews.json";

const ReviewListings = ({ isHome = false }) => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(data.reviews);
    setLoading(false);
  }, []);

  const reviewListings = isHome ? reviews.slice(0, 1) : reviews;

  return (
    <div className="w-5/6 md:w-2/3 pt-6 m-auto text-light p-4">
      {loading ? (
        <h2>Loading...</h2>
      ) : reviews.length > 0 ? (
        reviewListings.map((review) => (
          <ReviewListing key={review.id} review={review} />
        ))
      ) : (
        <p>No reviews available.</p>
      )}
      {isHome && <Button />}
    </div>
  );
};

export default ReviewListings;
