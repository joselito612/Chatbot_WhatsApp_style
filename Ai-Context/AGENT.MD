Aquí tienes tu proyecto **corregido y simplificado** según tus reglas:

* ✔ Árbol de decisiones
* ✔ Sin IA
* ✔ 100% frontend
* ✔ Enfocado en flujo y estado

---

````md
# 📌 Proyecto: Chat tipo WhatsApp (Frontend Only)

---

## 🌳 1. Enfoque: Árbol de Decisiones

El chat NO genera respuestas dinámicas.

Funciona así:

> input usuario → decisión → respuesta predefinida

---

## 🧠 2. Modelo Mental

El chat es:

> UI + estado + reglas

---

## 🧩 3. Estado Base

```js
{
  messages: [],
  currentStep: "start",
  isTyping: false
}
````

---

## 🌳 4. Árbol Conversacional

Ejemplo simple:

```js
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
}
```

---

## 🔁 5. Flujo

1. Usuario selecciona / escribe
2. Se guarda mensaje
3. Se lee `currentStep`
4. Se busca en el árbol (`flow`)
5. Se obtiene siguiente nodo
6. Se actualiza estado
7. UI renderiza

---

## 🗂️ 6. Estructura

```
/src
 ├── /components
 │    ├── Chat.jsx
 │    ├── Message.jsx
 │    └── Input.jsx
 │
 ├── /hooks
 │    └── useChat.js
 │
 ├── /data
 │    └── flow.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🧠 7. Lógica Central (useChat)

Responsabilidad:

* manejar estado
* mover el flujo
* agregar mensajes

```js
function sendMessage(option) {
  const nextStep = flow[currentStep].options.find(
    o => o.text === option
  ).next

  setMessages(prev => [...prev, { role: "user", content: option }])

  const botMessage = flow[nextStep].message

  setMessages(prev => [...prev, { role: "bot", content: botMessage }])

  setCurrentStep(nextStep)
}
```

---

## 🧭 8. Reglas

✔ Todo vive en el frontend
✔ El flujo está definido en un objeto (flow)
✔ El estado controla todo

---

## 🚫 9. Prohibiciones

❌ Nada de backend
❌ Nada de llamadas externas
❌ Nada dinámico fuera del flujo
❌ No lógica dentro de componentes grandes

---

## 🎯 10. Prioridades

1. UI tipo chat
2. Flujo correcto (árbol)
3. Estado limpio
4. Experiencia fluida

---

## 🔥 11. Regla Clave

> Si el flujo no está definido, el chat no existe

---

## 🧩 12. Filosofía

* simple
* predecible
* controlado
* fácil de escalar (agregando nodos)

---

## 🧠 Resumen Visual

```
Usuario → Estado → Árbol (flow) → Respuesta → UI
```

---

```

---


```
