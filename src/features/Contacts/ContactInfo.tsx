import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon,
  ExternalLink,
} from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-start space-x-2 w-full">
        <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
        <div className="w-full">
          <h2 className="text-3xl sm:text-2xl font-semibold mb-2">
            г. Москва, ул. Пушкина 9, 1/2
          </h2>
          <p className="text-lg text-gray-700 mb-2">Режим работы:</p>
          <ul className="text-gray-800 space-y-1 text-base sm:text-lg text-justify">
            <li>Пн–Пт 8:00 – 20:00</li>
            <li>Сб 9:00 – 17:00</li>
            <li className="text-red-600">Вс — выходной</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start space-x-2 w-full">
        <Phone className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
        <div className="w-full">
          <h3 className="text-2xl sm:text-xl font-medium mb-2">
            +7 (9999) 99-99-99
          </h3>
          <ul className="text-gray-800 space-y-1 text-base sm:text-lg text-justify">
            <li>+7 (8888) 88-88-88</li>
            <li>+7 (777) 777-77-77</li>
            <li>+7 (666) 666-66-66</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center space-x-2 w-full">
        <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
        <a
          href="mailto:test@example.com"
          className="text-2xl sm:text-xl text-gray-800 hover:text-red-600 transition w-full text-justify"
        >
          test@example.com
        </a>
      </div>

      <div className="flex items-start space-x-2 w-full">
        <LinkIcon className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
        <div className="space-y-2 text-base sm:text-lg text-justify w-full">
          <a
            href="https://t.me/lekovvv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-red-600 transition w-full"
          >
            <span className="ml-2">Вконтакте</span>
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
          <a
            href="https://t.me/lekovvv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-red-600 transition w-full"
          >
            <span className="ml-2">Телеграм</span>
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
