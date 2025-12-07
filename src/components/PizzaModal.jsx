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
        {/* Imagen de la Pizza */}
        <div className="w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="p-8">
          <h3 className="font-title text-3xl md:text-4xl text-burgundy mb-4">
            {pizza.name}
          </h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            {pizza.description}
          </p>

          <button
            onClick={onClose}
            className="w-full bg-burgundy text-white font-bold py-5 px-8 rounded-2xl text-xl md:text-2xl hover:bg-burgundy-dark transition-colors shadow-lg cursor-pointer"
          >
            {pizza.price}
          </button>
        </div>
      </div>

      {/* Botón de Cerrar */}
      <button
        onClick={onClose}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black text-white text-2xl font-bold flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-10"
      >
        ×
      </button>
    </div>
  )
}

