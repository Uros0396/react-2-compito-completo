import {Container, Row, Col } from "react-bootstrap"
import InputBooks from "./InputBooks";

const MyNav = () => {
  


    return (
     <nav>
        <Container fluid className="fixed-top">
            <Row>
                <Col lg={12} className="d-flex justify-content-between bg-dark">
                  <div className="d-flex gap-4">
                    <a href="#" className="text-light text-decoration-none">Home</a>
                    <a href="#" className="text-light text-decoration-none">About</a>
                    <a href="#" className="text-light text-decoration-none">Browser</a>
                  </div>
                  <div>
                  <InputBooks />
                  </div>
                </Col>
            </Row>
        </Container>
     </nav>
    )
}

export default MyNav