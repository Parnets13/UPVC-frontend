import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import name from './../../../public/Images/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters');
        } else {
            setError('');
            navigate('/Admin/Dashboard');
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="bg-white flex flex-col justify-center p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl">
            <img src={name} className='h-32' />
                <p className="text-gray-500 text-center mb-8">Sign in to access your dashboard</p>
                <form onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2 text-sm tracking-wide">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError('');
                                }}
                                placeholder="your@email.com"
                                className={`w-full pl-10 pr-4 py-3 border ${error && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                                        ? 'border-red-400 focus:border-red-400'
                                        : 'border-gray-300 focus:border-blue-500'
                                    } rounded-lg focus:outline-none focus:ring-2 ${error && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                                        ? 'focus:ring-red-200'
                                        : 'focus:ring-blue-200'
                                    } bg-gray-50 text-gray-800 transition duration-200`}
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2 text-sm tracking-wide">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                                placeholder="••••••••"
                                className={`w-full pl-10 pr-12 py-3 border ${error && password.length < 6
                                        ? 'border-red-400 focus:border-red-400'
                                        : 'border-gray-300 focus:border-blue-500'
                                    } rounded-lg focus:outline-none focus:ring-2 ${error && password.length < 6
                                        ? 'focus:ring-red-200'
                                        : 'focus:ring-blue-200'
                                    } bg-gray-50 text-gray-800 transition duration-200`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {showPassword ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                        <div className="mt-1 flex justify-between items-center">
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <span className={`text-xs ml-auto ${password.length > 0 && password.length < 6 ? 'text-red-500' : 'text-gray-400'
                                }`}>
                                {password.length > 0 ? `${password.length}/6` : ''}
                            </span>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${isLoading
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
                            }`}
                    >
                        {isLoading ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>


            </div>
        </div>
    );
};

export default Login;