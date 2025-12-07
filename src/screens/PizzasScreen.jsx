import React from 'react'
import { pizzas } from '../data/pizzas'

export default function PizzasScreen({ onNavigate, onPizzaPress }) {
  return (
    <div className="min-h-screen bg-pizza-texture">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-burgundy px-6 py-4 flex items-center justify-between shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <h2 className="font-title text-5xl md:text-6xl text-white">
          Pizzas
        </h2>
        
        <div className="w-12"></div>
      </div>

      {/* Lista de Pizzas */}
      <div className="px-6 py-8 space-y-6 pb-24">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            onClick={() => onPizzaPress(pizza)}
            className="pizza-card bg-white rounded-3xl p-6 shadow-xl flex items-center gap-6 cursor-pointer hover:shadow-2xl transition-all active:scale-95"
          >
            <div className="flex-shrink-0">
              <img 
                src={pizza.image} 
                alt={pizza.name} 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="font-title text-2xl md:text-3xl text-burgundy mb-2">
                {pizza.name}
              </h3>
              
              <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-2">
                {pizza.description}
              </p>
              
              <p className="font-title text-2xl md:text-3xl text-burgundy font-bold">
                {pizza.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

