 import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify';

const Home = () => {
  const [products, setProducts] = useState([]); // Store products data
  const [categories, setCategories] = useState([]); // Store category data
  const [selectedCategory, setSelectedCategory] = useState(''); // Track selected category
  const { dispatch } = useCart();

  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : 'https://fakestoreapi.com/products'; // Fetch all products if no category is selected
        const response = await axios.get(url);
        setProducts(response.data.slice(0, 4)); // Slice to get only the first 4 products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]); // Re-fetch products when category changes

  // Handle Add to Cart functionality
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Added item to cart!');
  };

  return (
    <div className="mt-5">
      {/* Hero Slider */}
      <Carousel className="shadow">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/f3/3d/48/f33d4847eb962358dd1f0408fa436be7.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/7b/43/e7/7b43e7c7655f37c656dff235af73a4ae.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/d3/3e/bb/d33ebb2a4d119bc46bf2876830198221.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Category Filter */}
      <Container className="mt-5">
        <h2 className="text-center mb-4 fw-bold text-secondary">Shop by Category</h2>
        <div className="d-flex justify-content-center mb-4">
          <select
            className="form-select w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </Container>

      {/* Featured Products Section */}
      <Container className="mt-4">
        <h2 className="text-center mb-4 fw-bold text-secondary">Featured Products</h2>
        <Row>
          {products.map((product) => (
            <Col md={3} sm={6} key={product.id}>
              <Card className="h-75 w-auto p-4 mt-5 shadow" style={{ backgroundColor: 'rgb(214, 214, 214)' }}>
                <Card.Img variant="top" src={product.image} alt={product.title} className="h-50 p-1 bg-secondary" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Promotional Section */}
      <div className="Promotional py-5 text-center mb-5 shadow">
        <h3>Seasonal Sale</h3>
        <p>Up to 50% off on selected items</p>
        <div className="d-flex justify-content-center">
          <Link to="shop" className="nav-link bg-primary w-25 p-1 rounded-pill">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
