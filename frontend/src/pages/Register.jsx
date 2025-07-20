import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/config'; // Assuming you have this file
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Clear previous errors

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            // Add user to Firestore database
            await setDoc(doc(db, 'users', user.uid), { 
                name, 
                email, 
                createdAt: new Date() 
            });
            navigate('/dashboard'); // Or wherever you want to redirect after registration
        } catch (err) {
            console.error('Register error:', err);
            // Provide a user-friendly error message
            setError(err.code ? err.code.replace('auth/', '').replace(/-/g, ' ') : 'Failed to create account.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 sm:py-24 pt-32 flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Glass morphism container */}
                <div className="glass-effect rounded-3xl p-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-6">
                        Create Account
                    </h2>
                    
                    {/* Display error messages in a styled box */}
                    {error && (
                        <p className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-center capitalize">
                            {error}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500 transition"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                         {/* Email Input */}
                         <div>
                            <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500 transition"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        {/* Password Input */}
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500 transition"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                         {/* Confirm Password Input */}
                         <div>
                            <label className="block text-gray-300 mb-2" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500 transition"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>
                    {/* Link to Login Page */}
                    <div className="text-center mt-6">
                        <p className="text-gray-400">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-400 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
