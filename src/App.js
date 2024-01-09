// Importez les modules nécessaires depuis React et react-bootstrap
import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';

// Définissez le composant App
function App() {
  return (
    <React.Fragment>
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Mon Projet React</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#features">Fonctionnalités</Nav.Link>
              <Nav.Link href="#about">À Propos</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* En-tête */}
        <Container className="mt-3">
          <h1>Bienvenue dans mon application React avec react-bootstrap!</h1>
        </Container>

        {/* Cartes */}
        <Container className="mt-3">
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>
                    Contenu de la carte 1.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text>
                    Contenu de la carte 2.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text>
                    Contenu de la carte 3.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

// Exportez le composant App
export default App;