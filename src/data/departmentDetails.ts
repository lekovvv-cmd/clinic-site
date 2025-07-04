export type DepartmentDetail = {
  title: string;
  description: string;
  features: string[];
  image?: string;
};

export const departmentDetails: Record<string, DepartmentDetail> = {
  "adult-department": {
    title: "Взрослое отделение",
    description:
      "Разбираться во всем, находить причины заболеваний и всегда знать правильный врачебный ответ — задачи специалистов взрослого отделения ЭкоМед. " +
      "Для вас работают опытные врачи, которые обладают большим количеством знаний в разных областях медицины. " +
      "Высокое качество работы достигается во взаимодействии со службами диагностики: УЗИ, эндоскопии, функциональной и лабораторной диагностики.",
    features: [
      "Широкий профиль услуг, который охватывает практически весь спектр внутренних болезней",
      "Контроль лечения на всех этапах — от первичного приема до полного выздоровления",
      "Подробные рекомендации по образу жизни, питанию, методам оздоровления",
    ],
  },
  "children-department": {
    title: "Детское отделение",
    description:
      "В детском отделении ЭкоМед работают педиатры и узкие специалисты, которые сопровождают здоровье детей с рождения до подросткового возраста. " +
      "Мы предлагаем комплексный подход к лечению и профилактике: от наблюдения за развитием малыша до диагностики и терапии хронических заболеваний. " +
      "Наши специалисты используют современные методы и оборудование, работают в тесной связке с диагностическими службами и уделяют внимание психологическому комфорту ребёнка и семьи.",
    features: [
      "Педиатры широкого профиля и детские узкие специалисты",
      "Детская функциональная диагностика (УЗИ, ЭКГ и др.)",
      "Психологическая поддержка и сопровождение семьи",
    ],
  },
  "functional-diagnostics": {
    title: "Отделение функциональной диагностики",
    description:
      "Это ключевое подразделение для оценки работы жизненно важных органов и систем. " +
      "Здесь проводят ЭКГ, ЭхоКГ, Холтер-мониторинг, спирометрию и другие исследования, позволяющие выявлять функциональные нарушения до появления симптомов. " +
      "Опытные врачи и лаборанты, работающие на современном оборудовании, обеспечивают высокую точность результатов и интерпретаций. " +
      "Диагностика проводится как по направлению, так и по желанию пациента.",
    features: [
      "Современные методики функциональных исследований",
      "Высокоточное оборудование и квалифицированные лаборанты",
      "Комплексный анализ результатов и рекомендации",
    ],
  },
  laboratory: {
    title: "Лаборатория",
    description:
      "Лаборатория ЭкоМед — это высокотехнологичное пространство, где ежедневно проводятся десятки видов исследований: от общеклинических анализов до сложных иммунологических и гормональных тестов. " +
      "Мы гарантируем точность результатов, безопасность забора и быструю обработку. " +
      "Все процедуры соответствуют международным стандартам. " +
      "Наши специалисты всегда готовы проконсультировать по подготовке и интерпретации анализов.",
    features: [
      "Возможность сдать анализы без предварительной записи",
      "Экспресс-диагностика и выдача результатов в краткие сроки",
      "Соблюдение всех стандартов качества и безопасности",
    ],
  },
  "ultrasound-endoscopy": {
    title: "Отделение УЗИ и эндоскопии",
    description:
      "В этом отделении проводятся высокоточные визуальные исследования органов и тканей. " +
      "Ультразвуковые и эндоскопические процедуры позволяют своевременно обнаружить патологии и дать объективную оценку состояния здоровья. " +
      "Используемое оборудование обеспечивает чёткость изображения, а результаты дополняются рекомендациями врачей. " +
      "Эндоскопические вмешательства проводятся с минимальной нагрузкой на пациента, с соблюдением стерильности и комфорта.",
    features: [
      "Минимально инвазивные методы диагностики",
      "Высокое разрешение изображений и видеофиксация",
      "Консультации по результатам исследований",
    ],
  },
  physiotherapy: {
    title: "Отделение физиотерапии",
    description:
      "Здесь реализуются индивидуальные программы физиолечения, направленные на восстановление организма после болезней и травм. " +
      "Процедуры включают УВЧ, магнитотерапию, лазеротерапию, электростимуляцию и другие методы. " +
      "Лечение проводится на современном оборудовании с контролем специалиста и учитывает особенности каждого пациента. " +
      "Физиотерапия улучшает циркуляцию, снимает воспаление, снижает болевой синдром и укрепляет иммунитет.",
    features: [
      "Индивидуальный подбор программ лечения",
      "Современные физиотерапевтические аппараты",
      "Комфорт и безопасность во время процедур",
    ],
  },
  "day-hospital": {
    title: "Дневной стационар",
    description:
      "Это оптимальный формат лечения без необходимости круглосуточного пребывания. " +
      "Подходит для процедур, капельниц, инъекций и наблюдения после манипуляций. " +
      "Пациент проводит несколько часов в уютной палате под контролем медицинского персонала, а затем возвращается домой. " +
      "Такой формат экономит время и снижает стресс, при этом обеспечивая качество и безопасность медицинской помощи.",
    features: [
      "Контроль состояния специалистами в течение дня",
      "Процедуры и капельницы по расписанию",
      "Быстрое восстановление и возвращение к обычному ритму жизни",
    ],
  },
  "doctor-office": {
    title: "Кабинет врача",
    description:
      "Пространство, где пациенты получают консультации специалистов различных профилей. " +
      "Комфортные условия приёма, конфиденциальность и внимательное отношение создают атмосферу доверия. " +
      "Каждый кабинет оснащён современным диагностическим и терапевтическим оборудованием. " +
      "Особое внимание уделяется комплексному подходу: от сбора анамнеза до назначения персонализированного плана лечения.",
    features: [
      "Уютная обстановка и конфиденциальность",
      "Современная мебель и оборудование",
      "Персонализированный подход к каждому пациенту",
    ],
  },
};
