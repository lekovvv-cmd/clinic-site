import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Специалисты", to: "/specialists" },
  { label: "Отделения", to: "/departments" },
  { label: "Услуги и цены", to: "/prices" },
  { label: "О клинике", to: "/about" },
  { label: "Контакты", to: "/contacts" },
  { label: "Вакансии", to: "/vacancies" },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="shadow border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img
            src="/clinic-site/assets/icons/logo.svg"
            alt="ЭкоМед"
            className="h-8"
          />
          <span className="font-serif text-2xl whitespace-nowrap">ЭкоМед</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 flex-shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="hover:text-red-600 transition whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Button onClick={() => navigate("/specialists")}>Записаться онлайн</Button>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-red-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-t border-gray-200 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-gray-700 hover:text-red-600 transition whitespace-nowrap"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  navigate("/specialists");
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-full"
              >
                Записаться онлайн
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
