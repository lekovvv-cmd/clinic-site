import React from "react";

const ContactMap: React.FC = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A88d1366521035d387bed4408aea14a98fef1f16bbc1babfd088571bdfbced5b6&amp;source=constructor"
        title="Яндекс.Карта — г. Москва, ул. Пушкина 9, 1/3"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default ContactMap;
