// Install React Bootstrap by running: npm install react-bootstrap bootstrap
import React, { useState } from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Image, Form } from 'react-bootstrap';

// Import your images (assuming they are in the 'images' folder within your 'src' directory)
import product1Image from '../images/cho.jpg.jpeg';
import product2Image from '../images/kova.jpg';


const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 20.99,
    description: 'Description for Product 1',
    image: product1Image,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 15.49,
    description: 'Description for Product 2',
    image: product2Image,
  }
];

const App = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'cheap', 'expensive'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price'

  const filteredAndSortedProducts = () => {
    let filteredProducts = [...products];

    // Filter based on the selected filter option
    if (filter === 'cheap') {
      filteredProducts = filteredProducts.filter(product => product.price < 20);
    } else if (filter === 'expensive') {
      filteredProducts = filteredProducts.filter(product => product.price >= 20);
    }

    // Sort based on the selected sort option
    if (sortBy === 'name') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    return filteredProducts;
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        {/* ... Navbar code as before ... */}
      </Navbar>

      <Container className="mt-4">
        <Form className="mb-4">
          <Form.Group controlId="filterSelect">
            <Form.Label>Filter by:</Form.Label>
            <Form.Control as="select" defaultValue={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="cheap">Cheap</option>
              <option value="expensive">Expensive</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="sortBySelect">
            <Form.Label>Sort by:</Form.Label>
            <Form.Control as="select" defaultValue={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Row>
          {filteredAndSortedProducts().map(product => (
            <Col key={product.id} md={4} sm={6} xs={12}>
              <Card className="mb-4">
                {/* Use the Image component from Bootstrap */}
                <Image src={product.image} alt={product.name} fluid />

                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
