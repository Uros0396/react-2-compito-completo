import { createContext } from "react";

const defaultValue = {
    reviewToReload: false,
    setReviewToReload: () => {}
}

const ReviewsContext = createContext(defaultValue);

export default ReviewsContext