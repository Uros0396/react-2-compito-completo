import { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Button } from "react-bootstrap";
import './CustomCard.css';
import { useNavigate } from "react-router-dom";
const CustomCard = ({ book, selectedBook, setSelectedBook }) => {
  
  const navigate = useNavigate()
  const handleRedirecttoDetail = () => {
    navigate(`/Detail/${book.asin}`)
  }

  const [isClicked, setIsClicked] = useState(false);

  const clickOnCard = () => {
    setSelectedBook(book);  
  };

  useEffect(() => {
    setIsClicked(selectedBook?.asin === book.asin);
  }, [selectedBook, book.asin]);

  return (
    <Card 
      className={`h-75 ${isClicked ? "border-danger bookCard border-3" : ""}`}
      onClick={clickOnCard}
    >  
      <CardImg
        variant="top"
        className="h-100 w-100 object-fit-cover"
        src={book.img}
      />
      <CardBody>
        <CardTitle>{book.category}</CardTitle>
        <CardText className="text-truncate">{book.title}</CardText>
        <div className="d-flex justify-content-between align-items-center">
          <CardText className="m-0">{book.price}</CardText>
        </div>
      </CardBody>
      <CardFooter>
      
      <Button 
          onClick={handleRedirecttoDetail}  
          className="btn btn-info w-100"
        >
          Details
        </Button>
      
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
  
