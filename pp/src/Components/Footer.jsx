import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-6 px-4 w-full">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left text-sm sm:text-base font-medium text-white">
                    © {new Date().getFullYear()} Blosys. All rights reserved.
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                    <Link to="/about" className="text-blue-200 hover:text-white cursor-pointer">
                        About
                    </Link>
                    <Link to="/contact" className="text-blue-200 hover:text-white cursor-pointer">
                        Contact
                    </Link>
                    <Link to="/privacy" className="text-blue-200 hover:text-white cursor-pointer">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


