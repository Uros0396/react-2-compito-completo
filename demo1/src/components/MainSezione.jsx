import fantasy from "../books/fantasy.json"
import {Container, Row} from "react-bootstrap"
import CustomCard from "./CustomCard"
import SingleBook from "./SingleBook"
import InputBooks from "./InputBooks"


const MainSezione = () => {
  const randomBook = fantasy.sort(() => Math.random() - 0.5)
    return (
     
        
     <Container className="mb-5 mt-4">
      <Row className="mt-4 d-flex justify-content-center align-items-center">
        <h2 className="text-center">Book of the Day</h2>
      </Row>
      <Row>
       {randomBook.map((book) => (
        <SingleBook
          title={book.title}
          price={book.price}
          img={book.img}
          category={book.category}
        />
       )).slice(0, 1)} 

       <Row>
       <InputBooks/>
       </Row>
        
      </Row>
        <Row className="gy-4">
          {randomBook.map((book) => (
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


  
