import type {
  CompanyStats,
  Partner,
  ContactInfo,
  Technology,
  HeroContent,
  NavigationItem,
} from '@/types'

export const SITE_CONFIG = {
  name: 'МістБуд Контроль',
  description: 'Проєктуємо промислові будівлі та споруди',
  url: 'https://mistbudcontrol.ua',
} as const

export const COMPANY_STATS: CompanyStats = {
  projects: '200+',
  clients: '100+',
  area: '70 000',
  recommendations: '90%',
}

export const PARTNERS: Partner[] = [
  {
    id: 'kontakt',
    name: 'МП «КОНТАКТ»',
    logo: '/partners/contact.png',
    location: 'Полтавська обл.',
    website: 'https://www.mirgorod.biz/',
    logoBackgroundClass: 'bg-slate-100',
  },
  {
    id: 'agroresurs',
    name: 'ТОВ «АГРОРЕСУРС»',
    logo: '/partners/agroresurs.svg',
    location: 'Кіровоградська обл.',
    website: 'https://www.agrs.group/',
  },
  {
    id: 'prombudcentr',
    name: 'ТОВ «ПРОМБУДЦЕНТР»',
    logo: '/partners/prombudcentre.webp',
    location: 'Київська обл.',
    website: 'https://prombudcentr.ua/',
    logoBackgroundClass: 'bg-slate-100',
  },
  {
    id: 'scanmix',
    name: 'ТОВ «СКАНМІКС-УКРАЇНА»',
    logo: '/partners/scanmix-logos.png',
    location: 'Полтавська обл.',
    website: 'http://scanmix.ua/',
  },
]

export const DIRECTOR_CONTACT: ContactInfo = {
  name: 'Валентин Погорілий',
  position: 'Директор, головний архітектор',
  description:
    'Особисто відповідаю на всі звернення, контролюю архітектуру та готовий обговорити технічні деталі, терміни виконання та вартість вашого проєкту.',
  phone: '+38 (000) 000-00-00',
  email: 'info@mistbudcontrol.ua',
  photo: '/team/director.jpg',
}

export const SPECIALIZATIONS = [
  {
    title: 'Склади сировини',
    percentage: '50%',
    description:
      'Комплексно проєктуємо складські обʼєкти та логістичні вузли з урахуванням санітарних і технологічних вимог.',
    items: [
      'Склади готової продукції',
      'Логістичні центри',
    ],
  },
  {
    title: 'Виробничі комплекси',
    percentage: '20%',
    description:
      'Опрацьовуємо технологічні схеми, конструктив та інженерію для різних типів виробничих цехів.',
    items: [
      'Металообробні майстерні',
      'Ремонтні майстерні',
    ],
  },
  {
    title: 'Підприємства харчування',
    percentage: '10%',
    description:
      'Готуємо робочу документацію для харчових виробництв із контролем санітарних норм та безпеки.',
    items: [
      'Цех переробки зерна',
      'Елеватор зберігання та сушки зерна',
    ],
  },
  {
    title:
      'Будівлі з обслуговування автомобільного транспорту',
    percentage: '20%',
    description:
      'Проєктуємо інфраструктуру для сервісу транспорту з урахуванням реальних потоків і режимів роботи.',
    items: ['Автостоянка, гаражі', 'СТО, АЗС'],
  },
] as const

export const TECHNOLOGIES: Technology[] = [
  {
    title: 'BIM моделювання',
    category: 'modeling',
    items: [
      {
        name: 'REVIT',
        icon: '/technologies/revit-icon.svg',
      },
      {
        name: 'ArchiCAD',
        icon: '/technologies/archicad.svg',
      },
      {
        name: 'SketchUp',
        icon: '/technologies/sketchup-icon.svg',
      },
    ],
  },
  {
    title: 'Візуалізація проєктів',
    category: 'rendering',
    items: [
      {
        name: 'ReRender',
        icon: '/technologies/rerender-icon.svg',
      },
      {
        name: 'Lumion',
        icon: '/technologies/lumion.svg',
      },
      {
        name: 'BIMteam',
        icon: '/technologies/bimteam.png',
      },
    ],
  },
]

export const BENEFITS = [
  {
    titleLine1: 'Партнерство і',
    titleLine2: 'комунікація',
    description:
      'Ми забезпечуємо прозору взаємодію на всіх рівнях: від розробки концепцій і планів виробництва до аналізу статистичної інформації та впровадження сучасних технологій будівництва й раціональних методів контролю.',
  },
  {
    titleLine1: 'Інженерний',
    titleLine2: 'ресурс',
    description:
      'Консультації команди з впровадження ефективних інженерних систем для задоволення виробничих потреб підприємств.',
  },
  {
    titleLine1: 'Ефективне',
    titleLine2: 'будівництво',
    description:
      'Інтегруємо бізнес-планування у процеси проєктування, будівництва та виробництва, застосовуючи найефективніші методи.',
  },
] as const

export const HERO_CONTENT: HeroContent = {
  title: {
    line1: 'ПРОЄКТУЄМО ПРОМИСЛОВІ',
    line2: 'БУДІВЛІ ТА СПОРУДИ',
  },
  description:
    "Повний цикл: від концепції та розміщення обладнання до дозвільної документації, авторського нагляду та введення об'єкта в експлуатацію. Враховуємо технологічні, екологічні, енергетичні вимоги та техумови підключення інженерних систем, забезпечуючи ефективну автоматизацію виробничих процесів.",
  buttons: {
    primary: 'Переглянути проєкти',
    secondary: 'Консультація з архітектором',
  },
}

export const NAVIGATION: NavigationItem[] = [
  {
    label: 'Про компанію',
    href: '/',
  },
  {
    label: 'Проєкти',
    href: '/projects',
  },
  {
    label: "Зв'язатися",
    href: '#contact',
  },
]

export const SECTION_HEADINGS = {
  featuredProjects: {
    title: "Реалізовані об'єкти",
  },
  allProjects: {
    title: 'Наші проєкти',
    subtitle:
      "Перегляньте приклади наших реалізованих проєктів промислових об'єктів",
  },
} as const

export const PROJECT_CATEGORY_LABELS: Record<
  string,
  string
> = {
  warehouse: 'Склад',
  production: 'Виробництво',
  logistics: 'Логістика',
  metalworking: 'Металообробка',
  'grain-processing': 'Переробка зерна',
  'transport-service': 'Транспортне обслуговування',
  other: 'Інше',
}

export const UI_TEXT = {
  viewAllProjects: 'Переглянути всі проєкти',
  openMenu: 'Відкрити меню',
  closeMenu: 'Закрити меню',
  noProjects:
    'Проєкти відсутні. Додайте перший проєкт у data/projects/',
} as const

export const FOOTER_TEXT = {
  companyDescription:
    'Професійне проєктування промислових будівель та споруд',
  contactsTitle: 'Контакти',
  navigationTitle: 'Навігація',
  copyright: 'Всі права захищені.',
} as const
