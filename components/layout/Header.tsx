import { useState } from "react";
import { 
  FiSearch, FiMapPin, FiCalendar, FiUsers 
} from "react-icons/fi";
import { 
  FaHome, FaBuilding, FaMountain, FaUmbrellaBeach, FaSwimmingPool, FaCampground, 
  FaTree, FaWarehouse, FaCity, FaHouseUser, FaWater, FaTractor, FaHotel, FaLandmark 
} from "react-icons/fa";
import { FaTreeCity, FaSuitcaseRolling } from "react-icons/fa6"; // ✅ Travel suitcase icon

const Header: React.FC = () => {
  const [location, setLocation] = useState("");

  const categories = [
    { name: "Rooms", icon: <FaHome size={20} /> },
    { name: "Mansion", icon: <FaBuilding size={20} /> },
    { name: "Countryside", icon: <FaMountain size={20} /> },
    { name: "Villa", icon: <FaUmbrellaBeach size={20} /> },
    { name: "Tropical", icon: <FaTree size={20} /> },
    { name: "New", icon: <FaWarehouse size={20} /> },
    { name: "Amazing pool", icon: <FaSwimmingPool size={20} /> },
    { name: "Beach house", icon: <FaUmbrellaBeach size={20} /> },
    { name: "Island", icon: <FaWater size={20} /> },
    { name: "Camping", icon: <FaCampground size={20} /> },
    { name: "Apartment", icon: <FaCity size={20} /> },
    { name: "House", icon: <FaHouseUser size={20} /> },
    { name: "Lakefront", icon: <FaWater size={20} /> },
    { name: "Farm house", icon: <FaTractor size={20} /> },
    { name: "Treehouse", icon: <FaTreeCity size={20} /> },
    { name: "Cabins", icon: <FaHotel size={20} /> },
    { name: "Castles", icon: <FaLandmark size={20} /> },
    { name: "Lakeside", icon: <FaWater size={20} /> },
  ];

  return (
    <header className="w-full border-b">
      {/* ✅ Top banner with React Icon */}
      <div className="bg-emerald-600 text-white text-center py-2 text-sm flex justify-center items-center gap-2">
        <FaSuitcaseRolling className="text-white text-lg" />  
        <span>Overseas trip? Get the latest information on travel guides</span>
        <button className="bg-black text-white text-xs px-3 py-1 rounded-full">
          More Info
        </button>
      </div>

      {/* ✅ Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 cursor-pointer">
          al<span className="text-black">x</span>
        </div>

        {/* ✅ Search Bar */}
        <div className="hidden lg:flex items-center gap-4 bg-white border rounded-full px-4 py-2 shadow-sm flex-grow max-w-3xl mx-4">
          {/* Location */}
          <div className="flex items-center gap-2 flex-1">
            <FiMapPin className="text-gray-500" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-sm focus:outline-none"
            />
          </div>

          <span className="text-gray-300">|</span>

          {/* Check-in */}
          <div className="flex items-center gap-2 flex-1">
            <FiCalendar className="text-gray-500" />
            <input
              type="text"
              placeholder="Check in"
              className="w-full text-sm focus:outline-none"
            />
          </div>

          <span className="text-gray-300">|</span>

          {/* Check-out */}
          <div className="flex items-center gap-2 flex-1">
            <FiCalendar className="text-gray-500" />
            <input
              type="text"
              placeholder="Check out"
              className="w-full text-sm focus:outline-none"
            />
          </div>

          <span className="text-gray-300">|</span>

          {/* People */}
          <div className="flex items-center gap-2 flex-1">
            <FiUsers className="text-gray-500" />
            <input
              type="text"
              placeholder="People"
              className="w-full text-sm focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition">
            <FiSearch size={18} />
          </button>
        </div>

        {/* ✅ Auth Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">
            Sign in
          </button>
          <button className="px-4 py-2 border rounded-full hover:bg-gray-100">
            Sign up
          </button>
        </div>
      </div>

      {/* ✅ Categories */}
      <div className="overflow-x-auto border-t">
        <div className="flex gap-6 px-4 py-3 whitespace-nowrap max-w-7xl mx-auto text-sm text-gray-700">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[70px] cursor-pointer hover:text-emerald-600"
            >
              {cat.icon}
              <span className="mt-1">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

// ✅ Export at the end
export default Header;
