'use client';

import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import VideoGallery from '@/components/VideoGallery';
import { videoConfig, videoUrls } from '@/config/videos-cloudinary';

const IntegracionVideos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section con Video de Fondo */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Videos de Bodas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturamos los momentos más especiales de tu día perfecto
            </p>
          </div>
          
          {/* Video Principal - Reel Bodas */}
          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              videoUrl={videoUrls.Reel_Bodas}
              title="Reel Bodas 2025"
              poster={videoConfig[1].poster}
              controls={true}
              className="w-full"
            />
          </div>
        </section>

        {/* Galería de Videos */}
        <section className="mb-16">
          <VideoGallery
            videos={videoConfig}
            title="Nuestros Trabajos"
            subtitle="Explora nuestra colección de videos de bodas"
          />
        </section>

        {/* Videos Individuales */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Videos Destacados</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Morse - Q bonita ere</h3>
              <VideoPlayer
                videoUrl={videoUrls["Morse_-_Q_bonita_ere"]}
                title="Morse - Q bonita ere"
                poster={videoConfig[0].poster}
                controls={true}
              />
            </div>

            {/* Video 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Reel Bodas</h3>
              <VideoPlayer
                videoUrl={videoUrls.Reel_Bodas}
                title="Reel Bodas"
                poster={videoConfig[1].poster}
                controls={true}
              />
            </div>
          </div>
        </section>

        {/* Video de Fondo (Autoplay) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Video de Fondo</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <VideoPlayer
              videoUrl={videoUrls.Reel_Bodas}
              autoplay={true}
              muted={true}
              loop={true}
              controls={false}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Video de Fondo</h3>
                <p className="text-lg">Autoplay, muted y loop</p>
              </div>
            </div>
          </div>
        </section>

        {/* Información de URLs */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">URLs de tus Videos</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Morse - Q bonita ere</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>URL:</strong> {videoUrls["Morse_-_Q_bonita_ere"]}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Poster:</strong> {videoConfig[0].poster}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">2. Reel Bodas</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>URL:</strong> {videoUrls.Reel_Bodas}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Poster:</strong> {videoConfig[1].poster}
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2">💡 Cómo usar en tu código:</h4>
            <pre className="text-sm overflow-x-auto">
{`import VideoPlayer from "@/components/VideoPlayer";
import { videoUrls } from "@/config/videos-cloudinary";

<VideoPlayer
  videoUrl={videoUrls.Reel_Bodas}
  title="Reel Bodas"
  controls={true}
/>`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntegracionVideos; 