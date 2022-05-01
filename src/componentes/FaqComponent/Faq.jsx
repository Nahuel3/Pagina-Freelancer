import React from 'react'
import './faq.scss'
const Faq = ({pregunta, descripcion}) => {
  return (
    <div className="container">
      <h1>{pregunta}</h1>
      <p>{descripcion}</p>
    </div>
  )
}

export default Faq