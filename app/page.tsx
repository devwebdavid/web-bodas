"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Building, Calendar, X, Instagram, Facebook, Menu, Volume2, VolumeX, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export default function FilmmakerPortfolio() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMoreVideos, setShowMoreVideos] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Smooth scroll behavior
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", handleClick))

    // Fullscreen change detection
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    // Video event listeners
    if (videoRef.current) {
      const video = videoRef.current
      
      const handlePlay = () => setIsPaused(false)
      const handlePause = () => setIsPaused(true)
      
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      
      return () => {
        links.forEach((link) => link.removeEventListener("click", handleClick))
        document.removeEventListener('fullscreenchange', handleFullscreenChange)
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
        document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
        document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
      }
    }

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick))
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  const openModal = (videoType: string) => {
    console.log('Opening modal for:', videoType)
    setActiveModal(videoType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Toggle mute clicked')
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
      console.log('Video muted:', videoRef.current.muted)
    }
  }

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Toggle fullscreen clicked')
    if (videoRef.current) {
      try {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen()
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          (videoRef.current as any).webkitRequestFullscreen()
        } else if ((videoRef.current as any).mozRequestFullScreen) {
          (videoRef.current as any).mozRequestFullScreen()
        } else if ((videoRef.current as any).msRequestFullscreen) {
          (videoRef.current as any).msRequestFullscreen()
        }
        console.log('Fullscreen requested')
      } catch (error) {
        console.log('Error al entrar en pantalla completa:', error)
      }
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPaused(false)
      } else {
        videoRef.current.pause()
        setIsPaused(true)
      }
    }
  }

  return (
    <div className={`${montserrat.className} min-h-screen bg-white`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Filmmaker</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors">
                Qué ofrecemos
              </a>
              <a href="#sobre-mi" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors">
                Sobre mí
              </a>
              <a href="#testimonios" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors">
                Opiniones
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors">
                Contacto
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                <a href="#inicio" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors py-2">
                  Inicio
                </a>
                <a href="#servicios" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors py-2">
                  Qué ofrecemos
                </a>
                <a href="#sobre-mi" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors py-2">
                  Sobre mí
                </a>
                <a href="#testimonios" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors py-2">
                  Opiniones
                </a>
                <a href="#contacto" className="text-gray-700 hover:text-[rgb(185,143,78)] transition-colors py-2">
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Background Video */}
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
          <source src="/Reel-Bodas.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-4xl">▶</span>
              </div>
              <p className="text-gray-400">Reel Bodas 2025</p>
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
            onMouseDown={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            title={isMuted ? "Activar sonido" : "Silenciar"}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
          <button
            onClick={toggleFullscreen}
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos Section */}
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
                {Array.from({ length: 10 }, (_, i) => (
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
                        <p className="text-gray-400 text-xs">Video {i + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/yo.jpg"
                  alt="Filmmaker Profile"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre mí</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Como filmmaker apasionado por capturar momentos únicos, me especializo en crear historias visualmente
                impactantes. Con un ojo meticuloso para el detalle, transformo bodas, proyectos corporativos y eventos
                especiales en experiencias cinematográficas. Aunque mi enfoque principal es el vídeo, aporto una
                sensibilidad fotográfica a cada proyecto para garantizar un resultado final elegante y pulido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opiniones Section */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Lo que dicen mis clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 italic">
                  "Inmortalizó el día de nuestra boda de una manera que superó todas nuestras expectativas. Cada
                  detalle, cada emoción... todo capturado a la perfección. ¡Un verdadero artista!"
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Ana y Carlos</strong>
                  <br />
                  Boda
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 italic">
                  "El vídeo corporativo que produjo para nuestra empresa ha sido un éxito rotundo. Entendió nuestra
                  marca y transmitió el mensaje con una profesionalidad y creatividad impecables."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>CEO de InnovaTech</strong>
                  <br />
                  Vídeo Corporativo
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 italic">
                  "Contratamos sus servicios para nuestro evento anual y el resultado fue espectacular. El vídeo resumen
                  captura la energía y los momentos clave de forma dinámica y emocionante."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Directora de Marketing</strong>
                  <br />
                  Evento Anual
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contacto</h2>
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Nombre"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5F5DC] focus:border-transparent"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5F5DC] focus:border-transparent"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje"
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5F5DC] focus:border-transparent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#F5F5DC] hover:bg-[#E6E6C7] text-gray-900 font-semibold py-4 rounded-lg transition-colors"
                >
                  Enviar
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left">
                <p className="text-lg text-gray-700 mb-6">También puedes encontrarme aquí:</p>
                <div className="flex justify-center md:justify-start space-x-6">
                  <a href="#" className="text-[rgb(205,163,98)] hover:text-[rgb(185,143,78)] transition-colors">
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-[rgb(205,163,98)] hover:text-[rgb(185,143,78)] transition-colors">
                    <Facebook className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">© 2025 Filmmaker Portfolio. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Video Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-[65%] max-w-none">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">▶</span>
                  </div>
                  <p className="text-gray-400">Video de {activeModal} - Reproductor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
