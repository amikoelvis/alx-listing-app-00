import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* ✅ Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* ✅ Logo + Description */}
        <div>
          <div className="mb-4">
            <Image
              src="/images/logo.png"
              alt="ALX Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          <p className="text-sm leading-relaxed">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy city
            apartments and tranquil countryside retreats to exotic beachside
            villas, ALX connects you with the perfect place to stay for any trip.
          </p>
        </div>

        {/* ✅ Explore Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Apartments in Dubai</li>
            <li className="hover:text-emerald-400 cursor-pointer">Hotels in New York</li>
            <li className="hover:text-emerald-400 cursor-pointer">Villa in Spain</li>
            <li className="hover:text-emerald-400 cursor-pointer">Mansion in Indonesia</li>
          </ul>
        </div>

        {/* ✅ Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">About us</li>
            <li className="hover:text-emerald-400 cursor-pointer">Blog</li>
            <li className="hover:text-emerald-400 cursor-pointer">Career</li>
            <li className="hover:text-emerald-400 cursor-pointer">Customers</li>
            <li className="hover:text-emerald-400 cursor-pointer">Brand</li>
          </ul>
        </div>

        {/* ✅ Help Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Support</li>
            <li className="hover:text-emerald-400 cursor-pointer">Cancel booking</li>
            <li className="hover:text-emerald-400 cursor-pointer">Refunds Process</li>
          </ul>
        </div>
      </div>

      {/* ✅ Divider */}
      <div className="border-t border-gray-700"></div>

      {/* ✅ Disclaimer + Legal Links */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>
          Some hotel requires you to cancel more than 24 hours before check-in.
          Details{" "}
          <span className="text-emerald-400 hover:underline cursor-pointer">
            here
          </span>
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:text-gray-200 cursor-pointer">Terms of Service</span>
          <span className="hover:text-gray-200 cursor-pointer">Policy service</span>
          <span className="hover:text-gray-200 cursor-pointer">Cookies Policy</span>
          <span className="hover:text-gray-200 cursor-pointer">Partners</span>
        </div>
      </div>
    </footer>
  );
};

// ✅ Export at the end
export default Footer;
