import { useState } from "react";
import {
  Menu,
  X,
  User,
  Bell,
  Search,
  Globe,
  Package,
  Plane,
  LogOut,
  Settings,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    logOut();
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Left section - Logo and primary navigation */}
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <div className="relative">
                <Globe className="h-8 w-8 text-white animate-spin-slow" />
                <Plane className="h-4 w-4 text-white absolute -top-1 -right-1" />
              </div>
              <span className="ml-2 text-2xl font-bold text-white">
                TravelTrade
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link
                to="/findTravelers"
                className="group relative inline-flex items-center px-2 pt-1 text-sm font-medium"
              >
                <span className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                <Package className="w-4 h-4 mr-2" />
                Find Travelers
              </Link>
              <Link to="/postTravelPlans" className="group relative inline-flex items-center px-2 pt-1 text-sm font-medium">
                <span className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                <Plane className="w-4 h-4 mr-2" />
                Post Travel Plans
              </Link>
              <Link to="/howItWorks" className="group relative inline-flex items-center px-2 pt-1 text-sm font-medium">
                <span className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                How It Works
              </Link>
            </div>
          </div>

          {/* Right section - Search and user actions */}
          <div className="hidden sm:flex items-center space-x-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-300" />
              </div>
              <input
                type="text"
                className="block w-64 pl-10 pr-3 py-2 border-2 border-blue-400 rounded-full leading-5 bg-blue-700 placeholder-blue-300 focus:outline-none focus:border-white focus:ring-0 sm:text-sm"
                placeholder="Search travelers..."
              />
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  {/* Notification Button */}
                  <button className="relative p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Bell className="h-6 w-6" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-white transform translate-x-1 -translate-y-1"></span>
                  </button>
                  
                  {/* Messages Button */}
                  <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <MessageSquare className="h-6 w-6" />
                  </button>
                  
                  {/* User Profile */}
                  <div className="flex items-center gap-2">
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="Profile" 
                        className="h-10 w-10 rounded-full border-2 border-white object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center border-2 border-white">
                        <User className="h-6 w-6" />
                      </div>
                    )}
                    <span className="font-medium text-sm hidden md:block">{user.displayName || "User"}</span>
                  </div>
                  
                  {/* Settings Button */}
                  <Link to="/settings" className="p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Settings className="h-6 w-6" />
                  </Link>
                  
                  {/* Direct Logout Button */}
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition-colors"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/signUpFLow"
                  className="flex items-center px-4 py-2 rounded-full bg-white text-blue-900 hover:bg-yellow-300 transition-colors"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span className="font-medium">Sign In</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-blue-900">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/findTravelers" className="flex items-center pl-3 pr-4 py-2 border-l-4 border-white text-base font-medium bg-blue-800">
              <Package className="w-5 h-5 mr-2" />
              Find Travelers
            </Link>
            <Link to="/postTravelPlans" className="flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-blue-800 hover:border-blue-300">
              <Plane className="w-5 h-5 mr-2" />
              Post Travel Plans
            </Link>
            <Link to="/howItWorks" className="flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-blue-800 hover:border-blue-300">
              How It Works
            </Link>
          </div>
          
          {user ? (
            <div className="pt-4 pb-3 border-t border-blue-800">
              <div className="px-4 flex items-center">
                <div className="flex-shrink-0">
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center border-2 border-white">
                      <User className="h-6 w-6" />
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium">{user.displayName || "User"}</div>
                  <div className="text-sm text-blue-300">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-white">
                  Your Profile
                </Link>
                <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-white">
                  Dashboard
                </Link>
                <Link to="/settings" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-white">
                  Settings
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium bg-red-700 text-white hover:bg-red-800"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-blue-800">
              <div className="flex items-center justify-center">
                <Link to="/signUpFLow" className="px-4 py-2 rounded-full bg-white text-blue-900 hover:bg-yellow-300 transition-colors">
                  <span className="font-medium">Sign In</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;