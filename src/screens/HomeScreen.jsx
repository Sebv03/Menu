import React from 'react'

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="min-h-screen">
      {/* Sección Blanca Superior */}
      <div className="bg-white min-h-[50vh] flex flex-col items-center justify-center px-6 pt-12 pb-8">
        <h1 className="font-title text-5xl md:text-6xl text-black mb-4">
          Pizza Hut
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          No One Outpizzas the Hut
        </p>
        <div className="w-full max-w-md">
          <img 
            src="/img/png-clipart-pizza-pizza.png" 
            alt="Pizza" 
            className="w-full h-auto object-cover"
            style={{ maxHeight: '300px', objectPosition: 'top' }}
          />
        </div>
      </div>

      {/* Sección Roja Inferior */}
      <div className="bg-pizza-texture min-h-[50vh] flex flex-col items-center justify-center px-6 py-12 relative">
        <h2 className="font-title text-6xl md:text-7xl text-white mb-12">
          Menu
        </h2>
        
        <div className="w-full max-w-sm space-y-4">
          <button
            onClick={() => onNavigate('pizzas')}
            className="w-full bg-white text-burgundy font-bold py-6 px-8 rounded-full text-xl md:text-2xl hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
          >
            Comida
          </button>

          <button
            onClick={() => alert('Próximamente: Bebestibles')}
            className="w-full bg-white text-burgundy font-bold py-6 px-8 rounded-full text-xl md:text-2xl hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
          >
            Bebestibles
          </button>
        </div>
      </div>
    </div>
  )
}

