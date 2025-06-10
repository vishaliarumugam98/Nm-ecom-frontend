import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }} className="text-center">
        <h1 className="font-bold text-3xl mb-4">NM-ECommerce</h1>

        <nav className="space-x-4">
          <Link to="/register">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
          </Link>
          <Link to="/login">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Login</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
