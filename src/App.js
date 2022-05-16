import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './books/books';
import Cadastrar from './users/components/cadastro';
import Users from './users/users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/" element={<Users />} />
        <Route path="/users/cadastro" element={<Cadastrar />} />
      </Routes>
    </Router>
  );
}

export default App;
