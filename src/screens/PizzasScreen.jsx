import React, { useState, useMemo } from 'react'
import { pizzas } from '../data/pizzas'

const CATEGORIES = ['Todas', 'Clásicas', 'Premium']

export default function PizzasScreen({ onNavigate, onPizzaPress }) {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [searchQuery, setSearchQuery] = useState('')

  // Filtrar pizzas por búsqueda
  const filteredPizzas = useMemo(() => {
    return pizzas.filter(pizza => {
      const query = searchQuery.toLowerCase()
      return (
        pizza.name.toLowerCase().includes(query) ||
        pizza.description.toLowerCase().includes(query)
      )
    })
  }, [searchQuery])

  // Agrupar pizzas por categoría
  const groupedPizzas = useMemo(() => {
    if (activeCategory === 'Todas') {
      // Si es "Todas", agrupamos por categoría para mostrar secciones
      const groups = {}
      filteredPizzas.forEach(pizza => {
        const cat = pizza.category || 'Otras'
        if (!groups[cat]) groups[cat] = []
        groups[cat].push(pizza)
      })
      return groups
    } else {
      // Si hay una categoría seleccionada, solo mostramos esa
      return {
        [activeCategory]: filteredPizzas.filter(p => p.category === activeCategory)
      }
    }
  }, [activeCategory, filteredPizzas])

  const scrollToSection = (category) => {
    setActiveCategory(category)
    if (category !== 'Todas') {
      const element = document.getElementById(`category-${category}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-pizza-texture">
      {/* Header Fijo */}
      <div className="sticky top-0 z-50 bg-burgundy shadow-lg">
        <div className="px-6 py-4 flex flex-col gap-4">
          {/* Top Bar: Back Button & Title */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('home')}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <h2 className="font-title text-3xl text-white">
              Menú
            </h2>

            <div className="w-10"></div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar pizza..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 text-white placeholder-white/60 rounded-xl py-3 px-10 border border-white/20 focus:outline-none focus:border-white/50 transition-colors"
            />
            <svg className="w-5 h-5 text-white/60 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide -mx-6 px-6">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat
                  ? 'bg-white text-burgundy shadow-md scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de Pizzas */}
      <div className="px-6 py-8 space-y-8 pb-32">
        {Object.keys(groupedPizzas).length === 0 ? (
          <div className="text-center text-gray-500 py-10 font-bold text-xl">
            No encontramos pizzas con ese nombre 😢
          </div>
        ) : (
          Object.entries(groupedPizzas).map(([category, items]) => (
            <div key={category} id={`category-${category}`} className="scroll-mt-48">
              {/* Category Header */}
              {items.length > 0 && (
                <h3 className="text-2xl font-black text-white mb-6 border-b-2 border-white/20 pb-2 inline-block">
                  {category}
                </h3>
              )}

              <div className="space-y-6">
                {items.map((pizza) => (
                  <div
                    key={pizza.id}
                    onClick={() => onPizzaPress(pizza)}
                    className="pizza-card bg-white rounded-3xl p-4 shadow-sm flex items-start gap-4 cursor-pointer hover:shadow-md transition-all active:scale-95 border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-28 h-28 bg-gray-50 rounded-2xl overflow-hidden">
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="w-full h-full object-cover mix-blend-multiply"
                      />
                    </div>

                    <div className="flex-grow flex flex-col justify-between self-stretch py-1">
                      <div>
                        <h3 className="font-title text-xl text-burgundy leading-tight mb-1">
                          {pizza.name}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                          {pizza.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-end mt-3">
                        <span className="font-bold text-lg text-burgundy">
                          {pizza.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
