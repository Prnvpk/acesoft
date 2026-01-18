export const Footer = () => {
  return (
    <footer className="bg-[#0B0F1A] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Acesoft</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We build high-quality mobile applications for iOS and Android,
            helping businesses grow with modern, scalable, and user-friendly
            solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-medium mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-green-400 cursor-pointer">
              iOS Development
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Android Development
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              App Maintenance
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-green-400 cursor-pointer"><a href="#home">Home</a></li>
            <li className="hover:text-green-400 cursor-pointer"><a href="#ios">iOS</a></li>
            <li className="hover:text-green-400 cursor-pointer"><a href="#android">Android</a></li>
            <li className="hover:text-green-400 cursor-pointer"><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 200 Villagewalk Blvd Suite</li>
            <li className="pl-5">304, London, ON N6G 0W8</li>
            <li>📞 +15198081000</li>
            <li className="pl-1">✉️info@acesoft.ca</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Acesoft. All rights reserved.
      </div>
    </footer>
  );
};
