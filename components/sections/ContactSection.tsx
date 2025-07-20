"use client"

import { Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
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
  )
} 