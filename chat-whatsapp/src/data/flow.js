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
  },

  sales: {
    message: "¿En qué podemos ayudarte con ventas?",
    options: [
      { text: "Precios", next: "pricing" },
      { text: "Planes", next: "plans" }
    ]
  },

  error: {
    message: "Lamentamos el error. Nuestro equipo técnico te contactará pronto.",
    options: [
      { text: "Volver al inicio", next: "start" }
    ]
  },

  account: {
    message: "Para problemas de cuenta, envíanos un correo a support@empresa.com",
    options: [
      { text: "Volver al inicio", next: "start" }
    ]
  },

  pricing: {
    message: "Nuestros precios empiezan desde $99/mes. ¿Quieres una demo?",
    options: [
      { text: "Sí, quiero demo", next: "demo" },
      { text: "Volver al inicio", next: "start" }
    ]
  },

  plans: {
    message: "Tenemos planes Basic, Pro y Enterprise. ¿Cuál te interesa?",
    options: [
      { text: "Basic", next: "basic" },
      { text: "Pro", next: "pro" },
      { text: "Enterprise", next: "enterprise" }
    ]
  },

  demo: {
    message: "Excelente, te contactaremos en menos de 24 horas.",
    options: [
      { text: "Volver al inicio", next: "start" }
    ]
  },

  basic: {
    message: "Plan Basic: $99/mes - Hasta 5 usuarios, soporte por email.",
    options: [
      { text: "Volver al inicio", next: "start" }
    ]
  },

  pro: {
    message: "Plan Pro: $199/mes - Hasta 20 usuarios, soporte prioritario.",
    options: [
      { text: "Volver al inicio", next: "start" }
    ]
  },

  enterprise: {
    message: "Plan Enterprise: $499/mes - Usuarios ilimitados, soporte 24/7.",
    options: [
      { text: "Volver al inicio", next: "start" }
    ]
  }
}

export default flow
