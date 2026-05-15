import Message from './Message'
import Input from './Input'

function Chat({ messages, isTyping, options, onSelect }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxWidth: '500px',
      margin: '0 auto',
      backgroundColor: '#e5ddd5',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#075e54',
        color: '#ffffff',
        padding: '16px',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        Chat Bot
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}

        {isTyping && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: '8px'
          }}>
            <div style={{
              padding: '8px 12px',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              <span style={{ animation: 'blink 1s infinite' }}>...</span>
            </div>
          </div>
        )}
      </div>

      <Input options={options} onSelect={onSelect} />
    </div>
  )
}

export default Chat
