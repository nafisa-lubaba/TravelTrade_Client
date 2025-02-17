import { useState, useEffect } from "react";
import {
  Plane,
  Package,
  Shield,
  Globe,
  ChevronRight,
  Star,
  Users,
  Map,
} from "lucide-react";
// import bg from "../../../assets/banner.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const howItWorks = [
    {
      icon: <Globe className="w-8 h-8 text-blue-800" />,
      title: "Post Your Request",
      description: "Share what you need from abroad and set your budget",
    },
    {
      icon: <Plane className="w-8 h-8 text-blue-800" />,
      title: "Match with Travelers",
      description: "Connect with verified travelers heading your way",
    },
    {
      icon: <Package className="w-8 h-8 text-blue-800" />,
      title: "Secure Delivery",
      description: "Get your items delivered safely and securely",
    },
  ];

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Trusted Community",
      description: "Join thousands of verified users worldwide",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Protected by our escrow system",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Global Reach",
      description: "Access to products from 100+ countries",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-800/5 backdrop-blur-3xl z-0" />
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
          transition-all duration-1000 ease-out`}
        >
          <div className="min-h-[80vh] flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
              {/* Left Column */}
              <div className="space-y-8">
                <h1 className="text-6xl font-bold text-blue-900 leading-tight">
                  <span className="text-blue-600">Shop Globally.</span> Deliver
                  Locally
                </h1>
                <p className="text-xl text-blue-800/80 max-w-xl">
                  Break down borders with our global community of travelers. Get
                  what you need from anywhere in the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="group bg-blue-800 text-white px-8 py-4 rounded-xl font-medium
                    hover:bg-blue-700 transform hover:scale-105 transition-all duration-300
                    flex items-center justify-center space-x-3"
                  >
                    <span>Start Shopping</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    className="px-8 py-4 rounded-xl font-medium
                    hover:bg-blue-50 transform hover:scale-105 transition-all duration-300
                    flex items-center justify-center space-x-3 border-2 border-blue-800/20
                    bg-white/80 backdrop-blur-lg text-blue-800"
                  >
                    <span>Become a Traveler</span>
                    <Plane className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Column - Animated Features */}
              <div className="relative h-[400px] hidden lg:block">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500
                      ${
                        index === activeFeature
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                  >
                    <div
                      className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-blue-100 shadow-xl
                      w-full max-w-md transform hover:scale-105 transition-transform"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-800/10 rounded-lg text-blue-800">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-blue-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-blue-800/80">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                number: "50K+",
                label: "Active Users",
                icon: <Users className="w-6 h-6" />,
              },
              {
                number: "100+",
                label: "Countries",
                icon: <Map className="w-6 h-6" />,
              },
              {
                number: "99.9%",
                label: "Success Rate",
                icon: <Star className="w-6 h-6" />,
              },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div
                  className="absolute inset-0 bg-blue-600 rounded-xl transform transition-transform 
                  group-hover:translate-x-2 group-hover:translate-y-2"
                ></div>
                <div
                  className="relative bg-white p-6 rounded-xl border border-blue-100 transform transition-transform 
                  group-hover:-translate-x-1 group-hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-800/10 rounded-lg text-blue-800">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-900">
                        {stat.number}
                      </div>
                      <div className="text-blue-800/80">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works - Enhanced */}
          <div className="py-20">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div
                  key={index}
                  className={`group relative ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className="absolute inset-0 bg-blue-600 rounded-xl transform transition-transform 
                    group-hover:translate-x-2 group-hover:translate-y-2"
                  ></div>
                  <div
                    className="relative bg-white p-8 rounded-xl border border-blue-100 transform transition-transform 
                    group-hover:-translate-x-1 group-hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-blue-800/10 rounded-lg flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-blue-800/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badge - Enhanced */}
          <div className="py-20">
            <div className="relative group max-w-3xl mx-auto">
              <div
                className="absolute inset-0 bg-blue-600 rounded-xl transform transition-transform 
                group-hover:translate-x-2 group-hover:translate-y-2"
              ></div>
              <div
                className="relative bg-white p-8 rounded-xl border border-blue-100 transform transition-transform 
                group-hover:-translate-x-1 group-hover:-translate-y-1 text-center"
              >
                <div className="p-4 bg-blue-800/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-blue-800" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  100% Secure Transactions
                </h3>
                <p className="text-blue-800/80 max-w-xl mx-auto">
                  Every transaction is protected by our escrow system and
                  verified traveler network. Your items and money are safe with
                  us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
