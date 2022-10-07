import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import AddBooks from './components/add_book/AddBooks';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Categories" element={<Categories />} />
          <Route path="/" element={<Books />} />
        </Routes>
        <AddBooks />
      </Router>
    </Provider>
  );
}

export default App;
