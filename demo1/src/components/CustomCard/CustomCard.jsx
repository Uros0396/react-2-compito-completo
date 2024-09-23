import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col } from "react-bootstrap"
import './CustomCard.css'
import ReviewsModal from "../ReviewsModal"

const CustomCard = ({book, selectedBook, setSelectedBook}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [show, setShow] = useState(false);

  const clickOnCard = () => {
    setSelectedBook(book.asin)
  }

  useEffect(() => {
    if(selectedBook === book.asin) {
      setIsClicked(true)
    } else {
      setIsClicked(false)
    }
  }, [selectedBook])

  const handleReviews = () => {
    setShow(true)
  }

  return (
    <Col sm={12} md={4} lg={3}>
      <Card 
        className={`h-100 ${isClicked ? "border-danger bookCard border-3" : ""}`}
        onClick={clickOnCard}
      >  
          <CardImg
            variant="top"
            className="h-100 w-100 object-fit-cover"
            src={book.img}
          />
          <CardBody>
            <CardTitle>
            {book.category}
            </CardTitle>
            <CardText className="text-truncate">
              {book.title}
            </CardText>
            <div className="d-flex justify-content-between align-items-center">
              <CardText className="m-0">
              {book.price}
              </CardText>
              {isClicked && <Button variant="primary" onClick={handleReviews}>Recensioni</Button>}
              <ReviewsModal show={show} setShow={setShow} asin={book.asin} />
            </div>
          </CardBody>
      </Card>
    </Col>
  )
}

export default CustomCard