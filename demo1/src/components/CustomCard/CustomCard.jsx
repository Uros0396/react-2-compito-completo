import { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import './CustomCard.css';
const CustomCard = ({ book, selectedBook, setSelectedBook }) => {
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
    </Card>
  );
};

export default CustomCard;
  
