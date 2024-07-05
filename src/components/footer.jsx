import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We provide the best event experiences. Discover amazing events and
              activities around you.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="/about" className="text-gray-400 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-primary"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: info@tukio.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">
              Address: 123 Event St, City, Country
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; 2024 Tukio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
