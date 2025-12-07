# Pizza Hut - Menú Virtual (React + Vite)

Aplicación web de menú virtual para Pizza Hut desarrollada con React, Vite y Tailwind CSS.

## 🚀 Características

- **Pantalla Home**: Landing page con logo, slogan y botones de navegación
- **Listado de Pizzas**: Vista con tarjetas horizontales de todas las pizzas disponibles
- **Modal de Detalle**: Vista detallada de cada pizza con imagen, descripción y precio
- **Diseño Mobile-First**: Optimizado para dispositivos móviles
- **Animaciones Suaves**: Transiciones fluidas entre pantallas
- **Tailwind CSS**: Estilos modernos y responsivos

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en la URL que aparece en la terminal (normalmente `http://localhost:5173`)

## 📦 Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 📱 Estructura del Proyecto

```
pizzahut/
├── public/
│   └── img/              # Imágenes de las pizzas
├── src/
│   ├── components/
│   │   └── PizzaModal.jsx    # Modal de detalle del producto
│   ├── screens/
│   │   ├── HomeScreen.jsx     # Pantalla de inicio
│   │   └── PizzasScreen.jsx  # Listado de pizzas
│   ├── data/
│   │   └── pizzas.js          # Datos de las pizzas
│   ├── App.jsx                # Componente principal
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── index.html                 # HTML principal
├── vite.config.js             # Configuración de Vite
├── tailwind.config.js         # Configuración de Tailwind
└── package.json               # Dependencias del proyecto
```

## 🎨 Paleta de Colores

- **Primario (Fondo)**: Rojo Borgoña `#8B1E25`
- **Secundario (Tarjetas)**: Blanco `#FFFFFF`
- **Texto**: Negro oscuro para títulos, gris para descripciones

## 📝 Notas

- Las imágenes deben estar en la carpeta `public/img/`
- Los datos de las pizzas se encuentran en `src/data/pizzas.js`
- Todos los botones están funcionales y conectados

## 🔧 Tecnologías Utilizadas

- **React 18**: Biblioteca de JavaScript para construir interfaces
- **Vite**: Herramienta de construcción rápida
- **Tailwind CSS**: Framework de CSS utility-first
- **React Hooks**: Para manejo de estado

## 🎯 Funcionalidades

- ✅ Navegación entre pantallas
- ✅ Modal interactivo al hacer clic en una pizza
- ✅ Cierre del modal con X, clic fuera o tecla ESC
- ✅ 4 pizzas predefinidas
- ✅ Diseño responsive
- ✅ Animaciones suaves
