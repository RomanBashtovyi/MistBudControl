# МістБуд Контроль - Landing Website

Сайт-візитівка для компанії МістБуд Контроль - проєктування промислових будівель та споруд.

## Технології

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (сірі компоненти)

## Структура проєкту

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout з Header/Footer
│   ├── page.tsx           # Головна сторінка
│   └── projects/
│       └── page.tsx       # Сторінка всіх проєктів
│
├── components/            # React компоненти
│   ├── ui/               # shadcn/ui компоненти
│   ├── Header.tsx        # Хедер з навігацією
│   └── Footer.tsx        # Футер з контактами директора
│
├── lib/                   # Утиліти
│   ├── utils.ts          # Tailwind merge utilities
│   └── projects.ts       # Функції для роботи з проєктами
│
├── types/                 # TypeScript типи
│   └── index.ts          # Project, Partner, ContactInfo, etc.
│
├── constants/             # Константи та конфігурація
│   └── site.ts           # Дані сайту, статистика, партнери
│
├── data/                  # Дані у JSON форматі
│   └── projects/         # Папки проєктів (manifest + зображення)
│       └── [project-id]/
│           ├── manifest.json
│           ├── thumbnail.jpg
│           └── 01.jpg, 02.jpg, ...
│
└── public/               # Статичні файли
    ├── logo.jpg         # Логотип компанії
    └── images/          # Загальні зображення
```

## Архітектурні рішення

### 1. Система проєктів

Кожен проєкт має окрему папку в `data/projects/[id]/` з **manifest.json та зображеннями в одному місці**:

```json
{
  "id": "project-1",
  "title": "Назва проєкту",
  "description": "Опис",
  "category": "warehouse",
  "area": "5000 м²",
  "year": "2023",
  "thumbnail": "thumbnail.jpg",
  "images": ["01.jpg", "02.jpg"],
  "featured": true
}
```

Зображення зберігаються разом з manifest.json для зручності управління.

### 2. Типізація

Всі дані типізовані через TypeScript інтерфейси в `types/index.ts`

### 3. Константи

Статичні дані (статистика, партнери, технології) винесені в `constants/site.ts` для легкого редагування

### 4. Утиліти

Функції для роботи з проєктами (`getAllProjects`, `getFeaturedProjects`, тощо) в `lib/projects.ts`

## Команди

```bash
# Розробка
npm run dev

# Білд
npm run build

# Продакшн
npm start

# Лінтинг
npm run lint
```

## Додавання нового проєкту

1. Створити папку в `data/projects/[project-id]/`
2. Додати `manifest.json` з інформацією про проєкт
3. Додати зображення **в ту ж саму папку** (thumbnail.jpg, 01.jpg, тощо)
4. Проєкт автоматично з'явиться на сайті

**Всі файли проєкту зберігаються разом!** Це зручно для додавання, редагування та видалення.

## SEO

- Мета-теги налаштовані в `app/layout.tsx`
- Українська мова (`lang="uk"`)
- Семантична HTML розмітка
