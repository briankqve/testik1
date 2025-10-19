# Инструкция по развертыванию на Vercel

## Шаг 1: Подготовка к загрузке в GitHub

1. Создайте новый репозиторий на GitHub
2. Инициализируйте git в папке проекта:
```bash
git init
git add .
git commit -m "Initial commit: тестовый сайт"
git branch -M main
git remote add origin https://github.com/ваш-username/ваш-репозиторий.git
git push -u origin main
```

## Шаг 2: Подключение к Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub аккаунт
3. Нажмите "New Project"
4. Выберите ваш репозиторий
5. Настройки проекта:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`

## Шаг 3: Дополнительные настройки

В настройках проекта Vercel добавьте переменные окружения (если нужно):
- `NODE_ENV=production`

## Шаг 4: Обновление доменов

После развертывания обновите в файлах:
- `public/robots.txt` - замените `your-domain.vercel.app` на ваш домен
- `public/sitemap.xml` - замените все ссылки на ваш домен
- `pages/_document.tsx` - обновите canonical URL
- Все страницы - обновите Open Graph URLs

## Автоматические обновления

После настройки каждое обновление в GitHub будет автоматически развертываться на Vercel.

## Проверка SEO

После развертывания проверьте:
1. [Google Search Console](https://search.google.com/search-console) - добавьте ваш сайт
2. [PageSpeed Insights](https://pagespeed.web.dev/) - проверьте скорость загрузки
3. [Rich Results Test](https://search.google.com/test/rich-results) - проверьте структурированные данные

## Структура финального сайта

- Главная страница с SEO-контентом (~250 слов)
- Страница YouTube с историей и ссылкой
- Страница контактов с номером +88005553535
- Все страницы оптимизированы для поисковых систем
