import { useState } from "react"
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "react-bootstrap"


const CustomCard = ({price, category, title, img}) => {

  const  [isClicked, setIsClicked] = useState(false)

  const clickOnCard = () => {
    setIsClicked(!isClicked)
  }

    return (
      <Col sm={12} md={4} lg={3} className="mt-5">
        <Card 
          className={`h-100 ${isClicked ? "border-danger" : ""}`}
          onClick={clickOnCard}
        >
          
           <CardImg
             variant="top"
             className="h-100 w-100 object-fit-cover"
             src={img}
           />
           <CardBody>
             <CardTitle>
              {category}
             </CardTitle>
           <CardText className="text-truncate">
              {title}
           </CardText>
           <CardText>
            {price}
           </CardText>
           </CardBody>
        </Card>
      </Col>
    )
}

export default CustomCard