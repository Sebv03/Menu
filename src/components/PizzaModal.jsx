import React, { useEffect } from 'react'

export default function PizzaModal({ visible, pizza, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && visible) {
        onClose()
      }
    }

    if (visible) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [visible, onClose])

  if (!visible || !pizza) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl slide-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen de la Pizza Completa */}
        <div className="w-full h-80 md:h-96 bg-white p-4 flex items-center justify-center">
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Contenido */}
        <div className="p-8 text-center">
          <h3 className="font-title text-4xl md:text-5xl text-burgundy mb-4">
            {pizza.name}
          </h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            {pizza.description}
          </p>

          <p className="font-title text-5xl md:text-6xl text-burgundy font-bold mb-4">
            {pizza.price}
          </p>
        </div>
      </div>

      {/* Botón de Cerrar Rojo */}
      <button
        onClick={onClose}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-burgundy text-white text-4xl font-bold flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-10 shadow-xl border-4 border-white"
      >
        ×
      </button>
    </div>
  )
}

