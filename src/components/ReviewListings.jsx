import { useState, useEffect } from "react";
import ReviewListing from "./ReviewListing";
import Button from "../components/Button";

const ReviewListings = ({ isHome = false }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log("Fetched data:", data);
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format");
        }
        setReviews(data);
      } catch (error) {
        console.log("Error fetching review data", error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const reviewListings = isHome ? reviews.slice(0, 1) : reviews;

  return (
    <div className="w-2/3 pt-6 m-auto text-light p-4">
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
