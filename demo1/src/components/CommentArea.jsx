import { useContext, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import DeleteReview from "./DeleteReview";
import ReviewsContext from "./ReviewsContext";



const CommentArea = ({ book }) => {
  const { reviewToReload } = useContext(ReviewsContext); 
  const [reviews, setReviews] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const asin = book.asin; 

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVlOWQ5Y2NiMjkxYzAwMTU4ZmZhNzYiLCJpYXQiOjE3MjY5MTM5NDgsImV4cCI6MTcyODEyMzU0OH0.J_kRGzLfLnx17wdw-29AEFnyzf_BotE8397dKj8gYyk"
        }
      });
      const data = await response.json();
      console.log(data);
      setReviews(data); 
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (asin) {
      getData(); 
    }
  }, [asin, reviewToReload]); 


  if (loading) return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  if (!reviews.length) return <p>Be the first to add a review!</p>;


  return (
    <div className="comment-area">
      <h3>Comments for {book.title}</h3>
      <ul>
        {reviews.map((comment, index) => (
          <li key={index}>
            {comment.comment} - <b>{comment.rate}</b> stars
            <DeleteReview id={comment._id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentArea;
