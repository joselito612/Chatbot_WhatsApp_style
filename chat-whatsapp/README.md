# Chat tipo WhatsApp (Frontend Only)

Proyecto de chat basado en árbol de decisiones, sin IA ni backend. Todo corre en el frontend.

## 📋 Descripción

Este chat funciona con un flujo predefinido de decisiones. El usuario selecciona opciones y el bot responde según un árbol conversacional configurado en un objeto JavaScript.

## ✨ Características

- ✅ 100% Frontend (sin backend ni IA)
- ✅ Árbol de decisiones configurable
- ✅ Interfaz tipo WhatsApp
- ✅ Estado manejado con React Hooks
- ✅ Respuestas inmediatas y predecibles

## 🗂️ Estructura del Proyecto

```
chat-whatsapp/
├── src/
│   ├── components/
│   │   ├── Chat.jsx        # Contenedor principal del chat
│   │   ├── Message.jsx     # Componente de mensaje individual
│   │   └── Input.jsx       # Botones de opciones
│   ├── hooks/
│   │   └── useChat.js      # Lógica de estado y flujo
│   ├── data/
│   │   └── flow.js         # Árbol de decisiones
│   ├── App.jsx             # Componente raíz
│   ├── main.jsx            # Entry point
│   └── style.css           # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Paso a Paso para Hacer Funcionar el Proyecto

### 1. Crear el proyecto con Vite

```bash
npm create vite@latest chat-whatsapp -- --template react
```

### 2. Entrar al directorio

```bash
cd chat-whatsapp
```

### 3. Instalar dependencias

```bash
npm install
npm install react react-dom
npm install -D @vitejs/plugin-react @types/react @types/react-dom
```

### 4. Crear la estructura de carpetas

```bash
mkdir src\components src\hooks src\data
```

### 5. Agregar los archivos fuente

- **`src/data/flow.js`**: Define el árbol de decisiones
- **`src/hooks/useChat.js`**: Maneja el estado y la lógica del flujo
- **`src/components/Chat.jsx`**: Contenedor visual del chat
- **`src/components/Message.jsx`**: Renderiza cada mensaje
- **`src/components/Input.jsx`**: Botones de selección de opciones
- **`src/App.jsx`**: Componente principal
- **`src/main.jsx`**: Punto de entrada
- **`vite.config.js`**: Configuración de Vite con React

### 6. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### 7. Abrir en el navegador

Visitar: `http://localhost:5173/`

## 🧠 Cómo Funciona

1. Al cargar, el chat muestra el mensaje inicial definido en `flow.start.message`
2. El usuario hace clic en una de las opciones mostradas
3. El mensaje del usuario se agrega al historial
4. El bot "escribe" (delay de 800ms) y muestra la respuesta del siguiente nodo
5. Se actualiza el `currentStep` y se muestran las nuevas opciones
6. El flujo continúa hasta llegar a un nodo que redirige al inicio

## 🌳 Ejemplo de Árbol de Decisiones (`flow.js`)

```javascript
const flow = {
  start: {
    message: "Hola, ¿qué necesitas?",
    options: [
      { text: "Soporte", next: "support" },
      { text: "Ventas", next: "sales" }
    ]
  },
  support: {
    message: "¿Qué problema tienes?",
    options: [
      { text: "Error", next: "error" },
      { text: "Cuenta", next: "account" }
    ]
  }
  // ... más nodos
}
```

## 🔧 Personalización

Para modificar el flujo, editá el archivo `src/data/flow.js` y agregá o cambiá los nodos del árbol. Cada nodo debe tener:
- `message`: El texto que mostrará el bot
- `options`: Array de opciones con `text` (lo que ve el usuario) y `next` (siguiente nodo)

## 📦 Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)

## 🎯 Reglas del Proyecto

- ✔ Todo vive en el frontend
- ✔ El flujo está definido en un objeto (`flow`)
- ✔ El estado controla todo
- ❌ Nada de backend
- ❌ Nada de llamadas externas
- ❌ Nada dinámico fuera del flujo

---

**Desarrollado siguiendo el modelo de árbol de decisiones para un flujo predecible y fácil de escalar.**
