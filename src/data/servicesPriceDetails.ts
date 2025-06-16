import specialistImg from "../assets/images/specialists/specialist.png";

export type Department = {
  key: string;
  title: string;
  photoUrl: string;
};

export const departments: Department[] = [
  {
    key: "nursing-procedures",
    title: "Медицинские процедуры, выполняемые средним медицинским персоналом",
    photoUrl: specialistImg,
  },
  {
    key: "gynecology-services",
    title: "Лечебные и диагностические манипуляции врача акушера-гинеколога",
    photoUrl: specialistImg,
  },
  {
    key: "cardio-diagnostics",
    title: "Функциональная диагностика сердечно-сосудистой системы",
    photoUrl: specialistImg,
  },
  {
    key: "checkup-programs",
    title: "Комплексные программы диспансерного наблюдения",
    photoUrl: specialistImg,
  },
  {
    key: "preventive-consultations",
    title: "Профилактические медицинские осмотры и консультации",
    photoUrl: specialistImg,
  },
  {
    key: "vaccination",
    title: "Вакцинопрофилактика детей и взрослых",
    photoUrl: specialistImg,
  },
  {
    key: "lab-tests",
    title: "Лабораторные исследования и анализы различного профиля",
    photoUrl: specialistImg,
  },
  {
    key: "physiotherapy-rehab",
    title: "Физиотерапевтические процедуры и реабилитация",
    photoUrl: specialistImg,
  },
  {
    key: "neurology",
    title: "Консультации врача-невролога и план лечения",
    photoUrl: specialistImg,
  },
  {
    key: "endocrinology",
    title: "Диагностика и лечение заболеваний эндокринной системы",
    photoUrl: specialistImg,
  },
  {
    key: "minor-surgery",
    title: "Амбулаторное хирургическое вмешательство",
    photoUrl: specialistImg,
  },
  {
    key: "pregnancy-care",
    title: "Программы ведения беременности и послеродового наблюдения",
    photoUrl: specialistImg,
  },
  {
    key: "ophthalmology",
    title: "Офтальмологическая диагностика и консультации",
    photoUrl: specialistImg,
  },
  {
    key: "orthopedic-diagnostics",
    title: "Диагностика и лечение заболеваний опорно-двигательного аппарата",
    photoUrl: specialistImg,
  },
  {
    key: "chronic-disease-care",
    title: "Ведение пациентов с хроническими заболеваниями",
    photoUrl: specialistImg,
  },
  {
    key: "screening",
    title: "Скрининговые обследования на раннее выявление заболеваний",
    photoUrl: specialistImg,
  },
  {
    key: "psychological-support",
    title: "Психологическая поддержка и консультации психотерапевта",
    photoUrl: specialistImg,
  },
  {
    key: "elderly-care",
    title: "Комплексное ведение пациентов пожилого возраста",
    photoUrl: specialistImg,
  },
  {
    key: "ultrasound-diagnostics",
    title: "Ультразвуковая диагностика (УЗИ) всех органов и систем",
    photoUrl: specialistImg,
  },
  {
    key: "post-covid-rehabilitation",
    title: "Программы восстановительного лечения после COVID-19",
    photoUrl: specialistImg,
  },
  {
    key: "dermatology",
    title: "Дерматологическая диагностика и лечение кожных заболеваний",
    photoUrl: specialistImg,
  },
  {
    key: "cardiology",
    title: "Кардиологическое обследование и индивидуальный подход",
    photoUrl: specialistImg,
  },
  {
    key: "stroke-rehabilitation",
    title: "Неврологическая реабилитация после инсульта и травм",
    photoUrl: specialistImg,
  },
  {
    key: "pediatric-care",
    title: "Педиатрический осмотр, вакцинация и развитие ребёнка",
    photoUrl: specialistImg,
  },
];
