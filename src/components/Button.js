const Button = ({ colour, text, onClick }) => {
  return <button
    onClick={onClick}
    style={{ backgroundColor: colour }}
    className="btn">
      {text}
    </button>
}

export default Button
