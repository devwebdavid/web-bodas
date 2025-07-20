"use client"

import { useState } from "react"
import { Heart, Building, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServicesSectionProps {
  openModal: (videoType: string) => void
}

export default function ServicesSection({ openModal }: ServicesSectionProps) {
  const [showMoreVideos, setShowMoreVideos] = useState(false)

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Qué ofrecemos</h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-lg">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-[rgb(205,163,98)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bodas</h3>
              <p className="text-gray-700">
                Capturamos la magia de vuestro día especial con un estilo cinematográfico y emotivo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-lg">
            <CardContent className="p-8 text-center">
              <Building className="w-12 h-12 text-[rgb(205,163,98)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vídeos Corporativos</h3>
              <p className="text-gray-700">
                Potenciamos la imagen de tu marca con vídeos profesionales que comunican y venden.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-lg">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 text-[rgb(205,163,98)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eventos</h3>
              <p className="text-gray-700">
                Inmortalizamos la energía de tus eventos para que puedas revivirlos y compartirlos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Service Videos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div
            className="aspect-video bg-gray-900 cursor-pointer group/video rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            onClick={() => openModal("bodas-service")}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">▶</span>
                </div>
                <p className="text-gray-400 text-sm">Video Bodas</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div
            className="aspect-video bg-gray-900 cursor-pointer group/video rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            onClick={() => openModal("corporativo-service")}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">▶</span>
                </div>
                <p className="text-gray-400 text-sm">Video Corporativo</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div
            className="aspect-video bg-gray-900 cursor-pointer group/video rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            onClick={() => openModal("eventos-service")}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">▶</span>
                </div>
                <p className="text-gray-400 text-sm">Video Eventos</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Ver más button */}
        <div className="text-center">
          <button
            onClick={() => setShowMoreVideos(!showMoreVideos)}
            className="bg-[rgb(205,163,98)] hover:bg-[rgb(185,143,78)] text-white px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            {showMoreVideos ? "Ver menos" : "Ver más"}
          </button>

          {/* Expandable video grid with smooth animation */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              showMoreVideos ? "max-h-96 opacity-100 mt-8" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`grid grid-cols-5 gap-4 transition-all duration-500 ${
                showMoreVideos ? "transform translate-y-0 opacity-100" : "transform -translate-y-4 opacity-0"
              }`}
            >
              {/* Primer video - Q Bonita Ere con preview */}
              <div
                className="aspect-video bg-gray-900 cursor-pointer group/video rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
                onClick={() => openModal("qbonitaere")}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video') as HTMLVideoElement;
                  if (video) {
                    video.play();
                  }
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video') as HTMLVideoElement;
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://res.cloudinary.com/dmsg7fa8h/video/upload/f_auto,q_auto/qbonitaere.jpg"
                >
                  <source src="https://res.cloudinary.com/dmsg7fa8h/video/upload/f_auto,q_auto/qbonitaere.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay con título */}
                <div className="absolute inset-0 bg-black/20 flex items-end justify-start p-2 group-hover/video:opacity-0 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">Q Bonita Ere</p>
                </div>
              </div>
              
              {/* Videos adicionales */}
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-video bg-gray-900 cursor-pointer group/video rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  onClick={() => openModal(`extra-video-${i}`)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 mx-auto mb-1 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-sm">▶</span>
                      </div>
                      <p className="text-gray-400 text-xs">Video {i + 2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 