import React from "react";
import ContactInfo from "../features/Contacts/ContactInfo";
import ContactMap from "../features/Contacts/ContactMap";
import QuestionsSection from "../features/Contacts/QuestionsSection";

const ContactsPage: React.FC = () => {
  return (
    <>
      <main className="py-4 mx-8">
        <div className="max-w-screen-xxl mx-auto">
          <div className="flex flex-col lg:flex-row w-full gap-4">
            <div className="w-full lg:w-[45%] h-140 bg-white rounded-2xl p-4">
              <ContactInfo />
            </div>

            <div className="w-full lg:w-[55%] h-140 rounded-2xl overflow-hidden">
              <ContactMap />
            </div>
          </div>
        </div>
      </main>

      <QuestionsSection />
    </>
  );
};

export default ContactsPage;
