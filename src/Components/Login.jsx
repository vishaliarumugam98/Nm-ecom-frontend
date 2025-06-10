import React, { useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 30,
    maxWidth: 400,
    margin: '40px auto',
    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: 12,
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    fontSize: 16,
  },
};

export default function Login() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    if (mobile.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    alert('Login Successful! (Simulated)');
    setMobile('');
    setPassword('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔐 Login</h2>
      <form onSubmit={login}>
        <input
          style={styles.input}
          type="tel"
          maxLength={10}
          placeholder="Mobile (10 digits)"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
