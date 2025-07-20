"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
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
  )
} 