import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/register', values)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/login');
        } else {
          alert(res.data.Error);
        }
      });
  };

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
              <input
                type="text"
                placeholder="name.lastname@domain"
                id="email"
                name="email"
                value={values.email}
                onChange={e => setValues({ ...values, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={values.password}
                onChange={e => setValues({ ...values, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white text-center py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">
              <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}>Submit</button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm">Do you have an account? <Link to="/login" className="text-cyan-600">Back for login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
