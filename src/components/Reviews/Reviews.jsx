import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from '../../services/API';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReview(movieId) {
      try {
        const reviewList = await getReviewsById(movieId);
        setReview(reviewList);
      } catch (error) {
        console.log(error);
      }
    }
    getReview(movieId);
  }, [movieId]);

  console.log(review);

  if (!review) {
    return null;
  }

  return (
    <ul>
      {review.length === 0 && <p>We don't have any reviews for this movie.</p>}
      {review.map(item => (
        <li key={item.id}>
          <h3>Author: {item.author}</h3>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
