import React from 'react'

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="min-h-screen bg-pizza-texture relative">
      {/* Header oscuro superior con ícono */}
      <div className="w-full bg-burgundy-dark h-14 md:h-16 flex items-center justify-between px-4">
        <img
          src="/img/LOGO.png"
          alt="Pizza Hut Mini Logo"
          className="h-8 md:h-10 w-auto object-contain"
        />
        {/* Espacio vacío para mantener el layout o simplemente eliminar el icono */}
      </div>

      {/* Contenido principal centrado */}
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 py-12">
        {/* Logo de Pizza Hut */}
        <div className="mb-16">
          <img
            src="/img/logo 2.png"
            alt="Pizza Hut"
            className="w-auto h-56 md:h-72 mx-auto"
            onError={(e) => {
              e.target.src = '/img/logo 2.png';
            }}
          />
        </div>

        {/* Botones tipo píldora */}
        <div className="w-full max-w-sm space-y-6">
          <button
            onClick={() => onNavigate('pizzas')}
            className="w-full bg-white text-burgundy font-bold py-6 px-8 rounded-full text-xl md:text-2xl hover:bg-gray-100 transition-colors shadow-lg cursor-pointer uppercase tracking-wide"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            COMIDA
          </button>

          <button
            onClick={() => alert('Próximamente: Bebestibles')}
            className="w-full bg-white text-burgundy font-bold py-6 px-8 rounded-full text-xl md:text-2xl hover:bg-gray-100 transition-colors shadow-lg cursor-pointer uppercase tracking-wide"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            BEBESTIBLE
          </button>
        </div>
      </div>
    </div>
  )
}
