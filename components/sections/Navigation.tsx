"use client"

import { Menu } from "lucide-react"

interface NavigationProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export default function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  return (
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
  )
} 