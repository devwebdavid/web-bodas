"use client"

import { useRef, useEffect, useState } from "react"
import { Volume2, VolumeX, Maximize } from "lucide-react"

interface HeroSectionProps {
  isMuted: boolean
  isFullscreen: boolean
  isPaused: boolean
  toggleMute: (e: React.MouseEvent) => void
  toggleFullscreen: (e: React.MouseEvent) => void
  togglePlayPause: () => void
  preventContextMenu: (e: React.MouseEvent) => void
}

export default function HeroSection({
  isMuted,
  isFullscreen,
  isPaused,
  toggleMute,
  toggleFullscreen,
  togglePlayPause,
  preventContextMenu
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Fullscreen change detection
    const handleFullscreenChange = () => {
      // This will be handled by the parent component
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        onContextMenu={(e) => e.preventDefault()}
        onClick={togglePlayPause}
      >
        <source src="https://res.cloudinary.com/dmsg7fa8h/video/upload/f_auto,q_auto/qbonitaere.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-4xl">▶</span>
            </div>
            <p className="text-gray-400">Q Bonita Ere - Background</p>
          </div>
        </div>
      </video>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer" onClick={togglePlayPause}>
          <div className="text-white text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-black/70 rounded-full flex items-center justify-center">
              <span className="text-4xl">▶</span>
            </div>
            <p className="text-xl font-semibold">Haz clic para reproducir</p>
          </div>
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer group">
        <div className="text-white text-center">
          <h1 className="text-6xl font-bold mb-4">Reel 2025</h1>
          <div className="text-2xl opacity-80">
            {isPaused ? "▶ Reproducir" : "⏸ Pausar"}
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-10" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={toggleMute}
          onContextMenu={preventContextMenu}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          title={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
        <button
          onClick={toggleFullscreen}
          onContextMenu={preventContextMenu}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        >
          {isFullscreen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <Maximize className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Play/Pause Button - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-10" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={togglePlayPause}
          onContextMenu={preventContextMenu}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          title={isPaused ? "Reproducir" : "Pausar"}
        >
          {isPaused ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          )}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 