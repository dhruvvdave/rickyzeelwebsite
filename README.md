# Ricky & Zeel Wedding Website

A modern, elegant wedding website built with React 18 + Vite.

## Tech Stack

- **React 18** with **Vite**
- **Tailwind CSS** for styling
- **React Router v6** for navigation
- **Framer Motion** for animations
- **Google Fonts**: Montserrat + Libre Caslon Display

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions.

### Live Site
🌐 **https://dhruvvdave.github.io/rickyzeelwebsite/**

### How it Works
- Every push to `main` triggers automatic deployment
- GitHub Actions builds the React app
- Built files are deployed to the `gh-pages` branch
- GitHub Pages serves the site

### First-Time Setup (Already Done)
1. Repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages` / `root`
4. Save

### Manual Deployment
You can also trigger deployment manually:
- Go to Actions tab
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow"

### Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings at your domain provider
3. Enable "Enforce HTTPS" in repository settings



```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Login (Development)

For development, any email or phone number will work. Use:
- Email: `test@example.com`
- Phone: `4165551234`

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── ui/           # Lower-level UI primitives
├── context/          # React Context (GuestContext)
├── pages/            # Page components
├── styles/           # Global CSS
└── utils/            # API + event definitions
```
