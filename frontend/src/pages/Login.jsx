import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo, status, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <section className="py-20 sm:py-24 pt-32 flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-effect rounded-3xl p-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
                    {error && <p className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-center">{error}</p>}
                    <form onSubmit={submitHandler}>
                        <div className="mb-4">
                            <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
                            <input type="password" id="password" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" disabled={status === 'loading'} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 disabled:opacity-50">
                            {status === 'loading' ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Login;