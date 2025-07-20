"use client"

import { useState, useEffect, useRef } from "react"
import { Montserrat } from "next/font/google"

// Importar componentes de secciones
import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import AboutSection from "@/components/sections/AboutSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"
import VideoModal from "@/components/sections/VideoModal"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export default function FilmmakerPortfolio() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  // Función para prevenir el menú contextual (descargar)
  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
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
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <HeroSection
        isMuted={isMuted}
        isFullscreen={isFullscreen}
        isPaused={isPaused}
        toggleMute={toggleMute}
        toggleFullscreen={toggleFullscreen}
        togglePlayPause={togglePlayPause}
        preventContextMenu={preventContextMenu}
      />

      {/* Services Section */}
      <ServicesSection openModal={openModal} />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      <VideoModal activeModal={activeModal} closeModal={closeModal} />
    </div>
  )
}
