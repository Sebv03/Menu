import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import PizzasScreen from './screens/PizzasScreen'
import PizzaModal from './components/PizzaModal'

function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  const [selectedPizza, setSelectedPizza] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const showScreen = (screen) => {
    setCurrentScreen(screen)
    window.scrollTo(0, 0)
  }

  const openModal = (pizza) => {
    setSelectedPizza(pizza)
    setModalVisible(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedPizza(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen">
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={showScreen} />
      )}
      
      {currentScreen === 'pizzas' && (
        <PizzasScreen 
          onNavigate={showScreen} 
          onPizzaPress={openModal}
        />
      )}

      <PizzaModal
        visible={modalVisible}
        pizza={selectedPizza}
        onClose={closeModal}
      />
    </div>
  )
}

export default App

