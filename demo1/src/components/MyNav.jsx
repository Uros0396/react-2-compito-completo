import {Container, Row, Col } from "react-bootstrap"


const MyNav = () => {
    return (
     <nav>
        <Container fluid className="fixed-top mt-5">
            <Row>
                <Col lg={12} className="d-flex justify-content-around align-items-center bg-dark">
                <p className="text-light">Home</p>
                <p className="text-light">About</p>
                <p className="text-light">Browser</p>
                </Col>
            </Row>
        </Container>
     </nav>
    )
}

export default MyNav