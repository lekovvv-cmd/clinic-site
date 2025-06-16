import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Phone, Mail, Globe, Send } from "lucide-react";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const menu = [
    { label: "Специалисты", to: "/specialists" },
    { label: "Отделения", to: "/departments" },
    { label: "Услуги и цены", to: "/prices" },
    { label: "О клинике", to: "/about" },
    { label: "Контакты", to: "/contacts" },
    { label: "Вакансии", to: "/vacancies" },
  ];

  return (
    <footer
      id="contacts"
      className="bg-white rounded-t-2xl p-8 mt-16 shadow-lg"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <Button onClick={() => navigate("/specialists")}>
            Записаться онлайн
          </Button>
          <p className="text-sm text-gray-700">г. Москва, ул. Пушкина 9, 1/2</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Меню</h3>
          <ul className="space-y-1">
            {menu.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-gray-600 hover:text-red-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Контакты</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-red-600" />
              <a
                href="tel:+79999999999"
                className="text-gray-700 hover:text-red-600"
              >
                +7 (9999) 99-99-99
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-red-600" />
              <a
                href="mailto:test@example.com"
                className="text-gray-700 hover:text-red-600"
              >
                test@example.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-red-600" />
              <a
                href="https://t.me/lekovvv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                Вконтакте
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Send className="w-5 h-5 text-red-600" />
              <a
                href="https://t.me/lekovvv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                Телеграм
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Информация</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-red-600">
                Согласие на обработку персональных данных
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-red-600">
                Политика использования cookies
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lekovvv-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                Сделано lekovvv-cmd
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
