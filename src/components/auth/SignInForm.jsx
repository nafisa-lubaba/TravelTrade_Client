import { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col items-center md:flex-row w-full max-w-4xl">
        {/* Left Side - SVG Illustration */}
        <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-l-2xl text-white flex flex-col justify-center items-center">
          <svg
            viewBox="0 0 400 400"
            className="w-full max-w-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="150" fill="#4B88EB" opacity="0.1" />
            <circle cx="200" cy="200" r="100" fill="#4B88EB" opacity="0.2" />
            <circle cx="200" cy="200" r="50" fill="#4B88EB" opacity="0.3" />
            
            {/* Traveling elements */}
            <g className="animate-orbit">
              <circle cx="350" cy="200" r="20" fill="white" />
              <path d="M330 200 L370 200 M350 180 L350 220" stroke="#4B88EB" strokeWidth="4" />
            </g>
            
            <g className="animate-orbit-reverse">
              <rect x="185" y="50" width="30" height="30" fill="white" transform="rotate(45 200 65)" />
            </g>
            
            <path
              d="M200 120 Q 280 160 200 200 Q 120 240 200 280"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="8 8"
              className="animate-dash"
            />
          </svg>
          
          <h2 className="text-3xl font-bold mt-8 mb-4">Welcome Back!</h2>
          <p className="text-center text-blue-100 mb-8">
            Connect with travelers worldwide and make your shipping dreams a reality.
          </p>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="md:w-1/2 p-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Sign in to TravelTrade</h2>
            <p className="text-gray-500 mb-8">Your gateway to global shipping solutions</p>
          </div>

          <form className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all"
                placeholder="Email address"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all hover:scale-105"
            >
              Sign in
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Dont have an account?{' '}
                <Link to="/signUpFLow" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;