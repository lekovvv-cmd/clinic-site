import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Специалисты", to: "/specialists" },
    { label: "Отделения", to: "/departments" },
    { label: "Услуги и цены", to: "/prices" },
    { label: "О клинике", to: "/about" },
    { label: "Контакты", to: "/contacts" },
    { label: "Вакансии", to: "/vacancies" },
  ];

  return (
    <header className="shadow border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/clinic-site/assets/icons/logo.svg"
            alt="ЭкоМед"
            className="h-8 relative -top-[4px]"
          />
          <span className="font-serif text-2xl">ЭкоМед</span>
        </Link>

        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-red-600 focus:outline-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:flex space-x-8 text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="hover:text-red-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Button onClick={() => navigate("/specialists")}>
            Записаться онлайн
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-gray-700 hover:text-red-600 transition"
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
