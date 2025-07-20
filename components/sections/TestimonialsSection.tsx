"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  return (
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
  )
} 