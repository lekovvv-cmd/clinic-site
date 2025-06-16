import specialistImg from "../assets/images/specialists/specialist.png";

export type Vacancy = {
  key: string;
  title: string;
  image: string;
};

export const vacancies: Vacancy[] = [
  { key: "osteopath", title: "Врач-остеопат", image: specialistImg },
  { key: "endocrinologist", title: "Врач-эндокринолог", image: specialistImg },
  { key: "gynecologist", title: "Врач акушер-гинеколог", image: specialistImg },
  { key: "ophthalmologist", title: "Врач-офтальмолог", image: specialistImg },
  {
    key: "gastroenterologist",
    title: "Врач-гастроэнтеролог",
    image: specialistImg,
  },
];
