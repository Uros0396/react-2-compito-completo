import { Container, Row, Col } from "react-bootstrap"


const Footer = () => {
    return (
       <footer>
        <Container fluid className="bg-dark">
            <Row>
                <Col sm={12} md={6} lg={3} className="text-light text-center">
                    <p>Amazon Devices</p>
                    <p>Investor Relations</p>
                    <p>Blog</p>
                </Col>
                <Col sm={12} md={6} lg={3} className="text-light text-center">
                    <p>Selling on Amazon Business</p>
                    <p>Partner program</p>
                    <p>Hosting an Amazon Hub</p>
                    
                </Col>
                <Col sm={12} md={6} lg={3} className="text-light text-center">  
                    <p>Shopping with points</p>
                    <p>Top up my balance</p>
                    <p>Amazon currency converter</p>
                    
                </Col>
                <Col sm={12} md={6} lg={3} className="text-light text-center">  
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