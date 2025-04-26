import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MyWebsite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Heading */}
      <Container className="my-4 text-center">
        <h1>Welcome to My Website</h1>
      </Container>

      {/* Cards */}
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente iste maiores fugit sunt ab dolorum! Veritatis, obcaecati! Itaque dignissimos harum laudantium dolorem accusamus quasi sed asperiores quia rem repellendus?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  dolorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente iste maiores fugit sunt ab dolorum! Veritatis, obcaecati! Itaque dignissimos harum laudantium dolorem accusamus quasi sed asperiores quia rem repellendus?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  agnus dolor sit amet consectetur adipisicing elit. Eos sapiente iste maiores fugit sunt ab dolorum! Veritatis, obcaecati! Itaque dignissimos harum laudantium dolorem accusamus quasi sed asperiores quia rem repellendus?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App
