"use client"

import { X } from "lucide-react"

interface VideoModalProps {
  activeModal: string | null
  closeModal: () => void
}

export default function VideoModal({ activeModal, closeModal }: VideoModalProps) {
  if (!activeModal) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-[65%] max-w-none">
        <button
          onClick={closeModal}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="aspect-video">
            {activeModal === "qbonitaere" ? (
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster="https://res.cloudinary.com/dmsg7fa8h/video/upload/f_auto,q_auto/qbonitaere.jpg"
              >
                <source src="https://res.cloudinary.com/dmsg7fa8h/video/upload/f_auto,q_auto/qbonitaere.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            ) : activeModal === "bodas-service" ? (
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster="https://res.cloudinary.com/dmsg7fa8h/video/upload/f_auto,q_auto/vargas.jpg"
              >
                <source src="https://res.cloudinary.com/dmsg7fa8h/video/upload/f_auto,q_auto/vargas.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">▶</span>
                  </div>
                  <p className="text-gray-400">Video de {activeModal} - Próximamente</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 