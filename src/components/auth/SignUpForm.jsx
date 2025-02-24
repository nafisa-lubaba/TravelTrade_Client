import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  MapPin,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";
import { Link } from "react-router-dom";

const SignUpForm = ({ userType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
    userType: userType,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col items-center md:flex-row-reverse w-full max-w-4xl">
        {/* Right Side - SVG Illustration */}
        <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-r-2xl text-white flex flex-col justify-center items-center">
          <svg
            viewBox="0 0 400 400"
            className="w-full max-w-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Patterns */}
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid)" />

            {/* Central Elements */}
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-spin-slow"
            />

            {/* Floating Elements */}
            <g className="animate-float">
              <rect
                x="160"
                y="140"
                width="80"
                height="80"
                fill="#4B88EB"
                opacity="0.2"
              />
              <rect x="170" y="150" width="60" height="60" fill="white" />
              <path
                d="M190 170 L210 190 M190 190 L210 170"
                stroke="#4B88EB"
                strokeWidth="4"
              />
            </g>

            {/* Moving Dots */}
            <circle
              cx="120"
              cy="120"
              r="8"
              fill="white"
              className="animate-bounce-slow"
            />
            <circle
              cx="280"
              cy="280"
              r="8"
              fill="white"
              className="animate-bounce-slow-delay"
            />
          </svg>

          <h2 className="text-3xl font-bold mt-8 mb-4">Join Our Network!</h2>
          <p className="text-center text-blue-100 mb-8">
            Connect with travelers worldwide and start your journey with
            TravelTrade today.
          </p>
        </div>

        {/* Left Side - Sign Up Form */}
        <div className="md:w-1/2 p-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-500 mb-8">
              {userType === "buyer"
                ? "Start hiring talented professionals"
                : "Start your professional journey"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all"
                placeholder={
                  userType === "buyer" ? "Company Name" : "Full Name"
                }
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all"
                placeholder="Email address"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all"
                placeholder="Password"
                required
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

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all"
                placeholder="Your Location"
                required
              />
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all hover:scale-105 mt-6"
            >
              {userType === "buyer" ? "Start Hiring" : "Join as Freelancer"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
