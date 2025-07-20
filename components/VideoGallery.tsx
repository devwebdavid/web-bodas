'use client';

import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Video {
  id: string;
  title: string;
  url: string;
  poster?: string;
  description?: string;
  duration?: string;
}

interface VideoGalleryProps {
  videos: Video[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  title = "Galería de Videos",
  subtitle = "Descubre nuestros mejores trabajos",
  className = ""
}) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const closeVideoModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <div className={`video-gallery ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative group cursor-pointer" onClick={() => openVideoModal(video)}>
                <VideoPlayer
                  videoUrl={video.url}
                  poster={video.poster}
                  autoplay={false}
                  muted={true}
                  controls={false}
                  className="w-full"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">▶</span>
                    </div>
                    <p className="font-semibold">Ver video</p>
                  </div>
                </div>

                {/* Duration badge */}
                {video.duration && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">{video.title}</CardTitle>
              {video.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {video.description}
                </p>
              )}
              
              <Button 
                onClick={() => openVideoModal(video)}
                className="mt-4 w-full"
                variant="outline"
              >
                Ver video completo
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal for full video */}
      {showModal && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl z-10"
            >
              ✕
            </button>
            
            {/* Video player */}
            <VideoPlayer
              videoUrl={selectedVideo.url}
              poster={selectedVideo.poster}
              title={selectedVideo.title}
              controls={true}
              className="w-full"
            />
            
            {/* Video info */}
            {selectedVideo.description && (
              <div className="mt-4 text-white">
                <p className="text-lg">{selectedVideo.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery; 