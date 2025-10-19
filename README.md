# Тестовый сайт для Vercel

Чистая папка с необходимыми файлами для деплоя на Vercel.

## Структура

```
vercel/
├── package.json          # Зависимости Next.js
├── next.config.js        # Конфигурация Next.js
├── tsconfig.json         # Настройки TypeScript
├── .gitignore           # Исключения для Git
├── pages/               # Страницы приложения
│   ├── _app.tsx         # Главный компонент
│   ├── _document.tsx    # HTML документ
│   ├── index.tsx        # Главная страница
│   ├── youtube.tsx      # Страница YouTube
│   └── contacts.tsx     # Страница контактов
├── components/          # Компоненты
│   └── Navigation.tsx   # Навигация
├── styles/              # Стили
│   └── globals.css      # Глобальные стили
└── public/              # Статические файлы
    ├── robots.txt       # SEO настройки
    ├── sitemap.xml      # Карта сайта
    └── manifest.json    # PWA манифест
```

## Деплой

1. Загрузите содержимое папки `vercel/` в ваш GitHub репозиторий
2. Подключите репозиторий к Vercel
3. Настройки:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: (оставить пустым для Vercel)

## После деплоя

Обновите `your-domain.vercel.app` на реальный URL в файлах:
- `public/robots.txt`
- `public/sitemap.xml`
- `pages/_document.tsx`
