import { useState } from "react";
import fantasy from "../books/fantasy.json";


const InputBooks = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    
    const filteredBooks = searchTerm
      ? fantasy.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];
  
    return (
      <div>
        <input 
          type="text"
          placeholder="Search Book"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm && (
          <ul>
            {filteredBooks.map((book) => (
              <li key={book.asin}>{book.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default InputBooks;