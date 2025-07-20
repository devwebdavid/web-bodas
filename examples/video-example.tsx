'use client';

import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import VideoGallery from '@/components/VideoGallery';

// Ejemplo de datos de videos (reemplaza con tus URLs reales de Cloudinary)
const sampleVideos = [
  {
    id: '1',
    title: 'Boda en la Playa',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/boda_playa.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/boda_playa.jpg',
    description: 'Una hermosa ceremonia en la playa con atardecer de fondo',
    duration: '3:45'
  },
  {
    id: '2',
    title: 'Ceremonia Tradicional',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/ceremonia_tradicional.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/ceremonia_tradicional.jpg',
    description: 'Ceremonia clásica en iglesia con detalles elegantes',
    duration: '4:20'
  },
  {
    id: '3',
    title: 'Fiesta de Recepción',
    url: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/fiesta_recepcion.mp4',
    poster: 'https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/fiesta_recepcion.jpg',
    description: 'Celebración vibrante con baile y música en vivo',
    duration: '2:55'
  }
];

const VideoExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Video Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Nuestros Videos de Bodas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturamos los momentos más especiales de tu día perfecto con la más alta calidad
            </p>
          </div>
          
          {/* Featured Video */}
          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              videoUrl="https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/video_principal.mp4"
              title="Video Destacado - Reel 2025"
              poster="https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/video_principal.jpg"
              controls={true}
              className="w-full"
            />
          </div>
        </section>

        {/* Video Gallery */}
        <section className="mb-16">
          <VideoGallery
            videos={sampleVideos}
            title="Galería de Trabajos"
            subtitle="Explora nuestra colección de videos de bodas"
          />
        </section>

        {/* Individual Video Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Ejemplos de Videos</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video con controles personalizados */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Video con Controles</h3>
              <VideoPlayer
                videoUrl="https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/ejemplo_1.mp4"
                title="Ejemplo 1"
                controls={true}
              />
            </div>

            {/* Video de fondo (autoplay, muted, loop) */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Video de Fondo</h3>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <VideoPlayer
                  videoUrl="https://res.cloudinary.com/tu_cloud/video/upload/f_auto,q_auto/ejemplo_2.mp4"
                  autoplay={true}
                  muted={true}
                  loop={true}
                  controls={false}
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h4 className="text-2xl font-bold mb-2">Video de Fondo</h4>
                    <p>Autoplay, muted y loop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Cómo Usar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Subir Videos</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Coloca tus videos en la carpeta <code className="bg-gray-100 px-2 py-1 rounded">videos/</code></li>
                <li>Ejecuta: <code className="bg-gray-100 px-2 py-1 rounded">node subir.js ./videos/</code></li>
                <li>Copia las URLs generadas</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">2. Integrar en tu Código</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// Reemplaza las URLs de ejemplo
const videos = [
  {
    id: '1',
    title: 'Tu Video',
    url: 'TU_URL_DE_CLOUDINARY',
    poster: 'URL_DEL_POSTER'
  }
];`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoExample; 