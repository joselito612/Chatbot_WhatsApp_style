function Input({ options, onSelect }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      padding: '12px',
      backgroundColor: '#f0f0f0',
      borderTop: '1px solid #ddd'
    }}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option.text)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #25d366',
            backgroundColor: '#ffffff',
            color: '#25d366',
            cursor: 'pointer',
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            transition: 'all 0.2s',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#25d366'
            e.target.style.color = '#ffffff'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ffffff'
            e.target.style.color = '#25d366'
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}

export default Input
