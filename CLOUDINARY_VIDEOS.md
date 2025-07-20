# 🎬 Sistema de Videos de Cloudinary

Sistema completo para subir videos grandes a Cloudinary y mostrarlos en tu landing page de bodas.

## 📁 Estructura del Proyecto

```
Web-bodas/
├── .env                           # Credenciales de Cloudinary
├── videos/                        # Carpeta para videos locales
├── Subir-cloudinary/              # Scripts de subida (excluido de git)
├── components/
│   ├── VideoPlayer.tsx           # Reproductor personalizado
│   └── VideoGallery.tsx          # Galería de videos
├── config/
│   └── videos-cloudinary.ts      # Configuración de videos
└── examples/
    └── integracion-videos.tsx    # Ejemplo de uso
```

## 🚀 Uso Rápido

### 1. Configurar credenciales
Crea un archivo `.env` con:
```
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

### 2. Colocar videos
Copia tus videos a la carpeta `videos/`

### 3. Subir a Cloudinary
```bash
cd Subir-cloudinary
node subir-grandes.js ../videos/
```

### 4. Generar URLs
```bash
node generar-urls.js
```

### 5. Usar en tu landing page
```jsx
import VideoPlayer from "@/components/VideoPlayer";
import { videoUrls } from "@/config/videos-cloudinary";

<VideoPlayer
  videoUrl={videoUrls.reelbodas}
  title="Reel Bodas 2025"
  controls={true}
/>
```

## 🎬 Videos Actuales

### Reel Bodas
- **URL**: `https://res.cloudinary.com/devwebbodas/video/upload/f_auto,q_auto/reelbodas.mp4`
- **Tamaño**: 1.8 GB
- **Uso**: Video principal, fondo de hero section

### Q Bonita Ere
- **URL**: `https://res.cloudinary.com/devwebbodas/video/upload/f_auto,q_auto/qbonitaere.mp4`
- **Tamaño**: 33 MB
- **Uso**: Video secundario, galería

## 🎯 Casos de Uso

### Video de Fondo (Hero Section)
```jsx
<VideoPlayer
  videoUrl={videoUrls.reelbodas}
  autoplay={true}
  muted={true}
  loop={true}
  controls={false}
  className="absolute inset-0 w-full h-full object-cover"
/>
```

### Video Destacado
```jsx
<VideoPlayer
  videoUrl={videoUrls.reelbodas}
  title="Reel Bodas 2025"
  poster={videoConfig[1].poster}
  controls={true}
  className="w-full"
/>
```

### Galería de Videos
```jsx
import VideoGallery from "@/components/VideoGallery";
import { videoConfig } from "@/config/videos-cloudinary";

<VideoGallery
  videos={videoConfig}
  title="Nuestros Trabajos"
  subtitle="Explora nuestra colección"
/>
```

## 🔧 Scripts Disponibles

### En la carpeta `Subir-cloudinary/`:

- `subir-grandes.js` - **Recomendado** para videos grandes
- `subir-alternativo.js` - Método alternativo
- `subir.js` - Método original
- `generar-urls.js` - Generar URLs de Cloudinary
- `test-upload.js` - Probar configuración

### Comandos útiles:
```bash
# Probar configuración
node Subir-cloudinary/test-upload.js

# Subir videos
node Subir-cloudinary/subir-grandes.js ./videos/

# Generar URLs
node Subir-cloudinary/generar-urls.js
```

## ⚡ Optimizaciones

- **f_auto**: Formato automático según navegador
- **q_auto**: Calidad automática optimizada
- **Chunk upload**: Subida por partes (6MB por chunk)
- **Posters automáticos**: Imágenes de vista previa
- **URLs HTTPS**: Seguridad garantizada

## 🎨 Componentes

### VideoPlayer
- Controles personalizados con iconos
- Soporte para autoplay, loop, muted
- Indicador de carga
- Barra de progreso interactiva
- Botones de play/pause, volumen, pantalla completa
- Responsive y táctil

### VideoGallery
- Grid responsive (1-3 columnas)
- Modal para videos completos
- Información de duración
- Overlay con botón de play
- Navegación por teclado

## 📱 Características

- ✅ Responsive design
- ✅ Controles táctiles
- ✅ Navegación por teclado
- ✅ Fallbacks para navegadores antiguos
- ✅ Optimización automática
- ✅ Soporte para videos grandes

## 🔒 Seguridad

- Scripts de subida excluidos de git
- Credenciales en archivo `.env` (excluido)
- URLs HTTPS automáticas
- No almacenamiento local de videos

## 🎉 ¡Listo para Usar!

Tus videos están optimizados y listos para ser integrados en tu landing page. El sistema está completamente configurado y funcional.

Para agregar nuevos videos:
1. Colócalos en `videos/`
2. Ejecuta `node Subir-cloudinary/subir-grandes.js ./videos/`
3. Ejecuta `node Subir-cloudinary/generar-urls.js`
4. ¡Listo! Las URLs se actualizan automáticamente 