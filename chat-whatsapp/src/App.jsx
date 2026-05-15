import { useEffect } from 'react'
import useChat from './hooks/useChat'
import Chat from './components/Chat'
import flow from './data/flow'

function App() {
  const { messages, isTyping, currentStep, sendMessage } = useChat()

  useEffect(() => {
    sendMessage('__init__')
  }, [])

  const options = flow[currentStep]?.options || []

  const handleSelect = (text) => {
    sendMessage(text)
  }

  return (
    <Chat
      messages={messages}
      isTyping={isTyping}
      options={options}
      onSelect={handleSelect}
    />
  )
}

export default App
