# Filmmaker Portfolio

Portfolio profesional de filmmaker con video de background y galería de trabajos.

## Tecnologías

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Cloudinary (para videos)
- Vercel (despliegue)

## Características

- 🎬 Video de background con controles
- 📱 Diseño responsive
- 🎥 Galería de videos con preview
- 📝 Formulario de contacto
- ⚡ Optimizado para rendimiento

## Instalación

```bash
npm install
npm run dev
```

## Despliegue

Este proyecto está configurado para desplegarse en Vercel automáticamente desde GitHub.

## Variables de Entorno

Crear un archivo `.env` con:

```
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

## Estructura del Proyecto

```
components/sections/
├── Navigation.tsx
├── HeroSection.tsx
├── ServicesSection.tsx
├── AboutSection.tsx
├── TestimonialsSection.tsx
├── ContactSection.tsx
├── Footer.tsx
└── VideoModal.tsx
``` 