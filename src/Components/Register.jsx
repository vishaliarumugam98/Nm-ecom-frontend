import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const isValidMobile = (m) => /^\d{10}$/.test(m);

  const sendOtp = async () => {
    if (!isValidMobile(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      const res = await axios.post('https://nm-ecom-backend.onrender.com/api/send-otp', { mobile });
      if (res.data.success) {
        alert(`OTP sent! (check console or response)`);
        setIsOtpSent(true);
      } else {
        alert(res.data.message || 'Failed to send OTP');
      }
    } catch (err) {
      alert('Error sending OTP');
      console.error(err);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    if (otp.trim() === '') {
      alert('Please enter OTP');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    try {
      const res = await axios.post('https://nm-ecom-backend.onrender.com/api/register', {
        mobile,
        otp,
        password,
      });

      if (res.data.success) {
        alert('Registered Successfully!');
        setMobile('');
        setOtp('');
        setPassword('');
        setIsOtpSent(false);
      } else {
        alert(res.data.message || 'Registration failed');
      }
    } catch (err) {
      alert('Registration error');
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-slate-100 p-8 rounded-xl shadow-lg text-center font-sans">
      <h2 className="text-2xl font-bold mb-5">📱 Register</h2>

      <input
        type="tel"
        maxLength={10}
        placeholder="Mobile (10 digits)"
        value={mobile}
        onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
        disabled={isOtpSent}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg"
      />

      {!isOtpSent ? (
        <button
          onClick={sendOtp}
          disabled={!isValidMobile(mobile)}
          className={`w-full py-3 rounded-md text-white text-lg font-medium ${
            isValidMobile(mobile)
              ? 'bg-blue-700 hover:bg-blue-800'
              : 'bg-blue-300 cursor-not-allowed'
          }`}
        >
          Send OTP
        </button>
      ) : (
        <form onSubmit={register}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg"
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md text-lg font-medium"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}
