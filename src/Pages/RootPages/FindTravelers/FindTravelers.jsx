import { useState } from "react";
import { FaPlaneDeparture, FaSearch, FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const travelersData = [
  { id: 1, name: "Rahul Sharma", from: "Mumbai, India", to: "New York, USA", date: "March 15, 2025" },
  { id: 2, name: "Priya Patel", from: "Delhi, India", to: "London, UK", date: "March 18, 2025" },
  { id: 3, name: "Amit Verma", from: "Bangalore, India", to: "San Francisco, USA", date: "March 20, 2025" },
];

export default function FindTravelers() {
  const [search, setSearch] = useState("");

  const filteredTravelers = travelersData.filter((traveler) =>
    traveler.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen py-10 px-5 md:px-20">
      <motion.h1 
        className="text-blue-900 text-4xl font-extrabold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Find Your Trusted Traveler
      </motion.h1>
      
      <div className="flex items-center bg-white p-3 rounded-lg shadow-lg mb-6">
        <FaSearch className="text-blue-800 mx-2 text-xl" />
        <input
          type="text"
          placeholder="Search by destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent focus:outline-none p-2 w-full text-lg"
        />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTravelers.map((traveler) => (
          <motion.div 
            key={traveler.id} 
            className="border border-blue-900 p-6 rounded-xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-blue-900 flex items-center">
              <FaUserCheck className="mr-2 text-blue-700" /> {traveler.name}
            </h2>
            <p className="text-gray-700 mt-2"><FaPlaneDeparture className="inline mr-2 text-blue-800"/> {traveler.from} → {traveler.to}</p>
            <p className="text-gray-600 mt-2">Travel Date: <span className="font-medium text-blue-800">{traveler.date}</span></p>
            <button className="mt-5 bg-blue-900 text-white px-5 py-3 rounded-lg hover:bg-blue-700 w-full text-lg font-semibold">
              Place Bid
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
