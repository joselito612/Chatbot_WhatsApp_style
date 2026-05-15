import { useState, useCallback } from 'react'
import flow from '../data/flow'

function useChat() {
  const [messages, setMessages] = useState([])
  const [currentStep, setCurrentStep] = useState('start')
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = useCallback((option) => {
    if (option === '__init__') {
      setMessages([{ role: 'bot', content: flow.start.message }])
      return
    }

    const currentNode = flow[currentStep]
    if (!currentNode) return

    const selectedOption = currentNode.options.find(o => o.text === option)
    if (!selectedOption) return

    const nextStep = selectedOption.next

    setMessages(prev => [...prev, { role: 'user', content: option }])

    setIsTyping(true)

    setTimeout(() => {
      const botMessage = flow[nextStep]?.message || 'Opción no válida'
      setMessages(prev => [...prev, { role: 'bot', content: botMessage }])
      setCurrentStep(nextStep)
      setIsTyping(false)
    }, 800)
  }, [currentStep])

  return {
    messages,
    currentStep,
    isTyping,
    sendMessage
  }
}

export default useChat
