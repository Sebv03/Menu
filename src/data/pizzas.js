export const pizzas = [
  {
    id: 'pizza-4-quesos',
    name: 'Pizza 4 quesos',
    image: '/img/Gemini_Generated_Image_91zf3891zf3891zf.png',
    description: 'La favorita de los amantes del queso. Una mezcla irresistible de mozzarella, gorgonzola, parmesano y provolone, fundidos a la perfección sobre nuestra masa crujiente.',
    price: '$7.990'
  },
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita',
    image: '/img/Gemini_Generated_Image_o98z6yo98z6yo98z.png',
    description: 'La clásica italiana con tomate fresco, mozzarella de búfala y albahaca. Un sabor auténtico que te transporta a Nápoles.',
    price: '$6.990'
  },
  {
    id: 'pizza-hawaiana',
    name: 'Pizza Hawaiana',
    image: '/img/Gemini_Generated_Image_qebcc7qebcc7qebc.png',
    description: 'La combinación perfecta de jamón dulce y piña fresca sobre una base de queso derretido. Dulce, salada y deliciosa.',
    price: '$8.990'
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza Pepperoni',
    image: '/img/png-clipart-pizza-pizza.png',
    description: 'Pepperoni picante y queso mozzarella derretido sobre nuestra masa crujiente. La favorita de todos.',
    price: '$7.990'
  }
];

export const getPizzaById = (id) => {
  return pizzas.find(pizza => pizza.id === id);
};

