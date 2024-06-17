import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'https://simple-ecommerce-api-1.onrender.com';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    region: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchRegions();
    fetchCart();
  }, [filters]); // Ensure fetchProducts is called when filters change

  const fetchProducts = () => {
    let url = `${baseUrl}/products?`;
    if (filters.category) url += `category=${filters.category}&`;
    if (filters.region) url += `region=${filters.region}&`;
    if (filters.minPrice) url += `minPrice=${filters.minPrice}&`;
    if (filters.maxPrice) url += `maxPrice=${filters.maxPrice}&`;

    console.log(`Fetching products from: ${url}`); // Debug log

    axios.get(url)
      .then(response => {
        setProducts(response.data);
        console.log('Products fetched:', response.data); // Debug log
      })
      .catch(error => console.error('Error fetching products:', error));
  };

  const fetchCategories = () => {
    axios.get(`${baseUrl}/categories/`)
      .then(response => {
        setCategories(response.data);
        console.log('Categories fetched:', response.data); // Debug log
      })
      .catch(error => console.error('Error fetching categories:', error));
  };

  const fetchRegions = () => {
    axios.get(`${baseUrl}/regions/`)
      .then(response => {
        setRegions(response.data);
        console.log('Regions fetched:', response.data); // Debug log
      })
      .catch(error => console.error('Error fetching regions:', error));
  };

  const fetchCart = () => {
    axios.get(`${baseUrl}/cart`)
      .then(response => {
        setCart(response.data);
        console.log('Cart fetched:', response.data); // Debug log
      })
      .catch(error => console.error('Error fetching cart:', error));
  };

  const addToCart = (productId) => {
    console.log(`Adding product ${productId} to cart`); // Debug log
    axios.post(`${baseUrl}/cart/`, { product_id: productId, quantity: 1 })
      .then(response => {
        alert('Product added to cart!');
        fetchCart();
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
      });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container">
      <h1 className="my-4">Products</h1>
      <Filters categories={categories} regions={regions} onFilterChange={handleFilterChange} />
      <ProductList products={products} addToCart={addToCart} />
      <h2 className="my-4">Cart</h2>
      <Cart cart={cart} />
    </div>
  );
};

export default App;
