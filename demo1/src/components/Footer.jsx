import { Container, Row, Col } from "react-bootstrap"


const Footer = () => {
    return (
       <footer>
        <Container fluid className="bg-dark">
            <Row>
                <Col className="text-light">
                    <p>Amazon Devices</p>
                    <p>Investor Relations</p>
                    <p>Blog</p>
                </Col>
                <Col className="text-light">
                    <p>Selling on Amazon Business</p>
                    <p>Partner program</p>
                    <p>Hosting an Amazon Hub</p>
                    
                </Col>
                <Col className="text-light">  
                    <p>"Shopping with points"</p>
                    <p>Top up my balance</p>
                    <p>Amazon currency converter</p>
                    
                </Col>
                <Col className="text-light">  
                    <p>My Account</p>
                    <p>My Orders</p>
                    <p>Help</p>
                   
                </Col>
            </Row>
      </Container>
       </footer> 
    )
}

export default Footer