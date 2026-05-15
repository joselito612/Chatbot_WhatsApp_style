function Message({ message }) {
  const isUser = message.role === 'user'

  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '8px'
    }}>
      <div style={{
        maxWidth: '70%',
        padding: '8px 12px',
        borderRadius: '12px',
        backgroundColor: isUser ? '#dcf8c6' : '#ffffff',
        color: '#000000',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '14px',
        lineHeight: '1.4'
      }}>
        {message.content}
      </div>
    </div>
  )
}

export default Message
