import React from 'react'
import { useState } from 'react'
import "../Stylesheets/Counter.css"

function Counter({quantity, setQuantity}) {
    
      const handleDecrement = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1)
        }
      }
      const handleIncrement = () => {
        if (quantity <10) {
          setQuantity(quantity + 1)
        }
      }
  return (
    <div className="counter">
      
      <button className="minus-button" onClick={() => {handleDecrement()}}>-</button>
        
        <div className='count-container'>{quantity}</div>
      <button className="plus-button" onClick={() => {handleIncrement()}}>+</button>
    </div>
  )
}

export default Counter