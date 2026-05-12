# WRPlanilhar Landing Page

Documentation and manuals landing page for WRPlanilhar software.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx              # Main app component
├── main.jsx             # Entry point
├── index.css            # Global styles
└── pages/               # Module pages
    ├── ImportacaoDwg.jsx
    ├── ImportacaoXls.jsx
    └── ...
```

## Modules

- Importação DWG/DXF
- Importação XLS
- Digitação Otimizada
- Leitura OCR
- Importação Automatizada
- Minhas Conferências
- Conferências Projetos
- Análise Gerencial

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 3
- Driver.js (tours)

## Deploy

Build the project with `npm run build`. The `dist/` folder contains the static files ready for deployment.

### Static Hosting

Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Azure Blob Storage