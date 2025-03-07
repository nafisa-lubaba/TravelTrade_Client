import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  Shield,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";

const SignUpForm = ({ userType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // Assuming you have a UseAuth hook similar to the second component
  // Import this at the top of your file with other imports
  const { createUser, updateUserProfile, signInWithGoogle } = UseAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: userType,
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validatePassword = (password) => {
    // Enforce a minimum of 8 characters
    return password.length >= 8;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Validate password length
    if (e.target.name === "password") {
      setPasswordValid(validatePassword(e.target.value));
      setPasswordMatch(
        e.target.value === formData.confirmPassword ||
          formData.confirmPassword === ""
      );
    }

    // Check if passwords match
    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      if (e.target.name === "confirmPassword") {
        setPasswordMatch(e.target.value === formData.password);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before submission
    if (!validatePassword(formData.password)) {
      setPasswordValid(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    // Here we handle the form submission with Firebase
    try {
      setLoading(true);
      // Create user with email and password
      const result = await createUser(formData.email, formData.password);

      // Update user profile with name
      // Note: We don't have photoURL in our form, so only passing name
      await updateUserProfile(formData.fullName, "");

      console.log("User created:", result.user);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: userType,
      });

      // Show success message
      // toast.success("User created successfully");

      // Navigate to the next page
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error creating user:", error);
      // toast.error("Error creating user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();
      console.log("Google Sign-In Success:", result.user);
      // toast.success("Google Sign-Up Successful");
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      // toast.error("Error signing in with Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col items-center md:flex-row-reverse w-full max-w-4xl">
        {/* Right Side - Lucide React Icons */}
        <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-r-2xl text-white flex flex-col justify-center items-center">
          <div className="w-64 h-64 relative mb-8">
            <Shield className="w-64 h-64 text-white opacity-20 absolute" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Lock className="w-24 h-24 text-white" />
            </div>
            <div className="absolute top-1/4 left-1/4 animate-bounce-slow">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 animate-bounce-slow-delay">
              <User className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-4 mb-4">Join Our Network!</h2>
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
                className={`block w-full pl-10 pr-12 py-3 border-2 ${
                  !passwordValid && formData.password
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-200 focus:ring-blue-500"
                } rounded-xl focus:ring-2 focus:border-transparent bg-gray-50 transition-all`}
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
            {!passwordValid && formData.password && (
              <div className="flex items-center text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                Password must be at least 8 characters long
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block w-full pl-10 pr-12 py-3 border-2 ${
                  !passwordMatch && formData.confirmPassword
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-200 focus:ring-blue-500"
                } rounded-xl focus:ring-2 focus:border-transparent bg-gray-50 transition-all`}
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            {!passwordMatch && formData.confirmPassword && (
              <div className="flex items-center text-red-500 text-sm">
                <XCircle className="h-4 w-4 mr-1" />
                Passwords do not match
              </div>
            )}

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
              disabled={loading}
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all hover:scale-105 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                "Creating Account..."
              ) : (
                <>
                  {userType === "buyer" ? "Start Hiring" : "Join as Freelancer"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
              </svg>
              <span>Continue with Google</span>
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
