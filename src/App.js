import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import AddBook from './components/add_book/AddBook';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Categories" element={<Categories />} />
          <Route path="/" element={<Books />} />
        </Routes>
        <AddBook />
      </Router>
    </>
  );
}

export default App;
