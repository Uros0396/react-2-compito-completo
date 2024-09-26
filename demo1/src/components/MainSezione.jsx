import fantasy from "../books/fantasy.json"
import {Container, Row} from "react-bootstrap"

import SingleBook from "./SingleBook"
//import InputBooks from "./InputBooks"
import CustomCard from "./CustomCard/CustomCard"
import { useContext, useMemo, useState } from "react"
import SearcContext from "./SearcContext"

const MainSezione = () => {
  const [selectedBook, setSelectedBook] = useState("")
  const { searchTerm } = useContext(SearcContext);

  const filteredBooks = searchTerm
    ? fantasy.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const randomBook = useMemo(() => fantasy.sort(() => Math.random() - 0.5), [])

  return ( 
  <Container className="mb-5 mt-4">
    <Row className="mt-4 d-flex justify-content-center align-items-center">
      <h2 className="text-center">Book of the Day</h2>
    </Row>
    <Row>
      {randomBook.slice(0, 1).map((book) => (
      <SingleBook
        key={book.asin}
        title={book.title}
        price={book.price}
        img={book.img}
        category={book.category}
      />
      ))} 
      
      
  <Row className="mt-5">
  <h3 className="text-center">Your Books</h3>
  {searchTerm !== "" ? (
    filteredBooks.length > 0 ? (
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.asin}>{book.title}</li>
        ))}
      </ul>
    ) : (
      <p className="text-center">Nessun libro trovato</p>
    )
  ) : (
    null
  )}
</Row>
    
      
    </Row>
      <Row className="gy-4 mt-5">
        {fantasy.slice(0, 10).map((book) => (
          <CustomCard
            key={book.asin}
            book={book}
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          />
        ))}
      </Row>
    </Container>
  )
}

export default MainSezione


  
