import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ReviewItem } from '../Reviews/Reviews.styled';
import { getReviewsById } from '../../services/API';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function getReview(movieId) {
      try {
        setIsLoading(true);
        const reviewList = await getReviewsById(movieId);
        setReview(reviewList);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something has gone wrong... Please try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }
    getReview(movieId);

    return () => {
      controller.abort();
    };

  }, [movieId]);

  if (!review) {
    return null;
  }

  return (
    <ul>
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      {review.length === 0 && <p>We don't have any reviews for this movie.</p>}
      {review.map(item => (
        <ReviewItem key={item.id}>
          <h3>Author: {item.author}</h3>
          <p>{item.content}</p>
        </ReviewItem>
      ))}
    </ul>
  );
};

export default Reviews;
