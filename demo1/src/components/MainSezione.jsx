import fantasy from "../books/fantasy.json"
import {Container, Row} from "react-bootstrap"
import CustomCard from "./CustomCard"

const MainSezione = () => {

    return (
        
     <Container className="mb-5 mt-4">
        <Row className="gy-4">
          {fantasy.map((book) => (
            <CustomCard 
              title={book.title}
              price={book.price}
              img={book.img}
              category={book.category}
            />
          )).slice(0, 10)}
        </Row>
     </Container>
    )
}

export default MainSezione