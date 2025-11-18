import type { CompanyStats, Partner, ContactInfo } from "@/types";

export const SITE_CONFIG = {
  name: "МістБуд Контроль",
  description: "Проектуємо промислові будівлі та споруди",
  url: "https://mistbudcontrol.ua",
} as const;

export const COMPANY_STATS: CompanyStats = {
  projects: "200+",
  clients: "100+",
  area: "70000",
  recommendations: "90%",
};

export const PARTNERS: Partner[] = [
  {
    id: "kontakt",
    name: "МП «КОНТАКТ»",
    logo: "/partners/contact.png",
    location: "Полтавська обл., м.Миргород",
    website: "https://www.mirgorod.biz/",
    logoBackgroundClass: "bg-slate-100",
  },
  {
    id: "agroresurs",
    name: "ТОВ «АГРОРЕСУРС»",
    logo: "/partners/agroresurs.svg",
    location: "Кіровоградська обл., м.Кропивницький",
    website: "https://www.agrs.group/",
  },
  {
    id: "prombudcentr",
    name: "ТОВ «ПРОМБУДЦЕНТР»",
    logo: "/partners/prombudcentr.png",
    location: "Київська обл., Києво-Святошинський р-н, с. Святопетрівське",
    website: "https://prombudcentr.ua/",
    logoBackgroundClass: "bg-slate-100",
  },
  {
    id: "scanmix",
    name: "ТОВ «СКАНМІКС-УКРАЇНА»",
    logo: "/partners/scanmix.png",
    location: "Полтавська обл., м. Полтава",
    website: "http://scanmix.ua/",
  },
];

export const DIRECTOR_CONTACT: ContactInfo = {
  name: "Директор компанії",
  position: "Директор",
  phone: "+38 (000) 000-00-00",
  email: "info@mistbudcontrol.ua",
  photo: "/team/director.jpg",
};

export const SPECIALIZATIONS = [
  {
    title: "Склади сировини",
    percentage: "50%",
    items: ["Склади готової продукції", "Логістичні центри"],
  },
  {
    title: "Виробничі комплекси",
    percentage: "20%",
    items: ["Металообробні майстерні", "Ремонтні майстерні"],
  },
  {
    title: "Підприємства харчування",
    percentage: "10%",
    items: ["Цех переробки зерна", "Елеватор зберігання та сушки зерна"],
  },
  {
    title: "Будівлі з обслуговування автомобільного транспорту",
    percentage: "20%",
    items: ["Автостоянка, гаражі", "СТО, АЗС"],
  },
] as const;

export const TECHNOLOGIES = [
  {
    title: "BIM моделювання",
    description: "REVIT, ArchiCAD, SketchUp",
    category: "modeling",
  },
  {
    title: "Task manager / PM система",
    description: "Worksection",
    category: "management",
  },
  {
    title: "Рендер model",
    description: "ReRender, Lumion, BIMteam",
    category: "rendering",
  },
] as const;

export const BENEFITS = [
  {
    title: "Партнерство та комунікація",
    description:
      "Розробка концепцій, планів виробництв, статистична інформація, новітні технології будівництва, раціональні контрольні.",
  },
  {
    title: "Інженерний ресурс",
    description:
      "Консультація від команди щодо впровадження ефективних інженерних систем на забезпечення виробничих потреб підприємств",
  },
  {
    title: "Ефективне будівництво",
    description:
      "Інтеграція бізнес планування у процеси проектування, будівництва та виробництва. Застосування найбільш ефективних методів",
  },
] as const;

