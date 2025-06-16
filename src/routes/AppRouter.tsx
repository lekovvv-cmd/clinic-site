import React, { lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/Layouts/ScrollToTop";

const Header = lazy(() => import("../components/Layouts/Header"));
const Footer = lazy(() => import("../components/Layouts/Footer"));

const Landing = lazy(() => import("../pages/Landing"));
const Specialists = lazy(() => import("../pages/SpecialistsPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage"));
const Department = lazy(() => import("../pages/DepartmentsPage"));
const DepartmentDetail = lazy(() => import("../pages/DepartmentDetailPage"));
const Contacts = lazy(() => import("../pages/ContactsPage"));
const Prices = lazy(() => import("../pages/PricesPage"));
const PriceDetail = lazy(() => import("../pages/PriceDetailPage"));
const Vacancies = lazy(() => import("../pages/VacanciesPage"));
const About = lazy(() => import("../pages/AboutPage"));

export const AppRouter: React.FC = () => (
  <HashRouter>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/specialists" element={<Specialists />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/prices/:slug" element={<PriceDetail />} />
      <Route path="/departments" element={<Department />} />
      <Route path="/departments/:slug" element={<DepartmentDetail />} />
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </HashRouter>
);
