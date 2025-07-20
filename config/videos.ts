// Configuración de videos de Cloudinary
// Reemplaza estas URLs con las que obtengas al ejecutar el script subir.js

export interface VideoConfig {
  id: string;
  title: string;
  url: string;
  poster?: string;
  description?: string;
  duration?: string;
  category?: string;
}

// Videos principales (reemplaza con tus URLs reales)
export const videos: VideoConfig[] = [
  {
    id: 'reel-2025',
    title: 'Reel 2025 - Bodas',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/reel_2025.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/reel_2025.jpg',
    description: 'Compilación de los mejores momentos de bodas 2025',
    duration: '2:30',
    category: 'reel'
  },
  {
    id: 'boda-playa',
    title: 'Boda en la Playa',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/boda_playa.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/boda_playa.jpg',
    description: 'Una hermosa ceremonia en la playa con atardecer de fondo',
    duration: '3:45',
    category: 'ceremonia'
  },
  {
    id: 'ceremonia-iglesia',
    title: 'Ceremonia Tradicional',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/ceremonia_iglesia.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/ceremonia_iglesia.jpg',
    description: 'Ceremonia clásica en iglesia con detalles elegantes',
    duration: '4:20',
    category: 'ceremonia'
  },
  {
    id: 'fiesta-recepcion',
    title: 'Fiesta de Recepción',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/fiesta_recepcion.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/fiesta_recepcion.jpg',
    description: 'Celebración vibrante con baile y música en vivo',
    duration: '2:55',
    category: 'fiesta'
  },
  {
    id: 'sesion-fotos',
    title: 'Sesión de Fotos',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/sesion_fotos.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/sesion_fotos.jpg',
    description: 'Momentos íntimos y románticos de la sesión de fotos',
    duration: '1:45',
    category: 'sesion'
  },
  {
    id: 'primer-baile',
    title: 'Primer Baile',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/primer_baile.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/primer_baile.jpg',
    description: 'El primer baile de los novios como esposos',
    duration: '3:15',
    category: 'fiesta'
  }
];

// Función para obtener videos por categoría
export const getVideosByCategory = (category: string): VideoConfig[] => {
  return videos.filter(video => video.category === category);
};

// Función para obtener el video principal (reel)
export const getMainVideo = (): VideoConfig | undefined => {
  return videos.find(video => video.category === 'reel');
};

// Función para obtener videos de ceremonia
export const getCeremonyVideos = (): VideoConfig[] => {
  return getVideosByCategory('ceremonia');
};

// Función para obtener videos de fiesta
export const getPartyVideos = (): VideoConfig[] => {
  return getVideosByCategory('fiesta');
};

// Función para obtener videos de sesión de fotos
export const getPhotoSessionVideos = (): VideoConfig[] => {
  return getVideosByCategory('sesion');
};

// Función para buscar videos por título
export const searchVideos = (query: string): VideoConfig[] => {
  const lowercaseQuery = query.toLowerCase();
  return videos.filter(video => 
    video.title.toLowerCase().includes(lowercaseQuery) ||
    video.description?.toLowerCase().includes(lowercaseQuery)
  );
};

// Configuración de Cloudinary
export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'tu_cloud',
  baseUrl: 'https://res.cloudinary.com',
  transformations: {
    auto: 'f_auto,q_auto',
    thumbnail: 'f_auto,q_auto,w_300,h_200,c_fill',
    poster: 'f_auto,q_auto,w_800,h_450,c_fill',
    optimized: 'f_auto,q_auto,w_1920,h_1080,c_scale'
  }
};

// Función para generar URL optimizada
export const getOptimizedVideoUrl = (publicId: string, transformation?: string): string => {
  const baseUrl = cloudinaryConfig.baseUrl;
  const cloudName = cloudinaryConfig.cloudName;
  const trans = transformation || cloudinaryConfig.transformations.auto;
  
  return `${baseUrl}/${cloudName}/video/upload/${trans}/${publicId}.mp4`;
};

// Función para generar URL de poster
export const getPosterUrl = (publicId: string): string => {
  const baseUrl = cloudinaryConfig.baseUrl;
  const cloudName = cloudinaryConfig.cloudName;
  const trans = cloudinaryConfig.transformations.poster;
  
  return `${baseUrl}/${cloudName}/video/upload/${trans}/${publicId}.jpg`;
}; 