import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "react-bootstrap"


const CustomCard = ({price, category, title, img}) => {
    return (
      <Col sm={12} md={4} lg={3} className="mt-5">
        <Card className="h-100">
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