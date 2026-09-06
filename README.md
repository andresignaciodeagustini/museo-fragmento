# Museo Fragmento — Frontend

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Estructura

- `src/pages/` — Home, Galería (embebida hoy, ruta propia en `/galeria`), Visita, Entradas.
- `src/components/` — Navbar (logo + hamburguesa + switch de idioma), AudioPlayer, PiezaCard.
- `src/context/LanguageContext.jsx` — maneja el idioma global (ES/EN), persistido en localStorage.
- `src/i18n/` — textos generales del sitio en `es.json` / `en.json`.
- `src/data/galeria.js` — las 12 piezas (imagen + audio ES/EN). Mismo formato que usará el backend a futuro.
- `src/styles/global.css` — estilos base, pendiente de identidad visual definitiva.

## Pendiente

- Subir las 12 imágenes a `public/assets/coleccion/` y los 24 audios a `public/assets/audio/es/` y `/en/`.
- Reemplazar `public/assets/hero-principal.jpg` por la imagen principal real.
- Definir estilos/identidad visual final.
- QR: apuntar a un link corto (bit.ly o similar) que redirija a `<dominio-actual>/galeria`, para no depender del dominio gratuito de Vercel/Render.
