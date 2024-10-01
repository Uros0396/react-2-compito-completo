import {Container, Row, Col, Button } from "react-bootstrap"
import InputBooks from "../InputBooks/InputBooks";
import { useContext } from "react";
import { DarkContext } from "../../contexts/DarkContext";


const MyNav = () => {
  
const {isDarkMode, toggleDarkMode} = useContext(DarkContext)

    return (
     <nav>
        <Container fluid className={`fixed-top ${isDarkMode ? "bg-dark" : "bg-info"}`}>
            <Row>
                <Col lg={12} className="d-flex justify-content-between">
                  <div className="d-flex gap-4">
                    <a href="#" className="text-light text-decoration-none">Home</a>
                    <a href="#" className="text-light text-decoration-none">About</a>
                    <a href="#" className="text-light text-decoration-none">Browser</a>
                  </div>
                  <div>
                  <InputBooks />
                  
                   <Button
                    variant="info"
                    onClick={toggleDarkMode}
                   >
                     dark mode
                   </Button>
                  </div>
                </Col>
            </Row>
        </Container>
     </nav>
    )
}

export default MyNav