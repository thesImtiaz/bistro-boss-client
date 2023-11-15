import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="font-inter">
      <div className="footer gap-0">
        <div className="bg-[#1F2937] w-full p-6">
          <div className="text-white text-center mx-auto">
            <header className="text-xl md:text-2xl font-medium uppercase mb-5">
              Contact Us
            </header>
            <div className="text-sm font-medium space-y-2">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111827] w-full h-full p-6">
          <div className="text-white text-center mx-auto">
            <header className="text-xl md:text-2xl font-medium uppercase mb-5">
              Follow US
            </header>
            <p className="text-sm font-medium mb-5">Join us on social media</p>
            <div className="grid grid-flow-col gap-4 text-xl">
              <a>
                <FaFacebookF />
              </a>
              <a>
                <BsInstagram />
              </a>
              <a>
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-center p-4 bg-black text-base-content">
        <div>
          <p className="text-white text-sm font-medium">
            Copyright © CulinaryCloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
