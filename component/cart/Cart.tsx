import React from 'react'
import { useStateContext } from '../context/context'



const Cart = () => {
  const {setShowCart} = useStateContext()
  return (
    <div>
      <span onClick={() => setShowCart(false)}>close </span>
      Cart je fonctionne

      </div>
  )
}

export default Cart
