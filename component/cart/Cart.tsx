import Image from 'next/image'
import React from 'react'
import { useStateContext } from '../context/context'
import Product from '../product/Product'



const Cart = () => {
  const { setShowCart, cartItems, onRemove } = useStateContext()
  return (
    <div>
      <span onClick={() => setShowCart(false)}>close </span>

      {!cartItems.length && <div> <p>Vous navez rien dans votre panier</p>
        <button onClick={() => setShowCart(false)}>continuer votre shopping </button> </div>}

      <div>
        {cartItems.map((cart) => <div key={cart.id}> <Image key={cart.id} alt={cart.title}
        src={cart.image} width={50} height={50} layout={'fixed'} /> <span key={'1'}>{cart.quantity}</span>  <button key={cart.id}
        onClick={() => onRemove(cart.id)}>{cart.quantity}</button></div>)}
      </div>

    </div>
  )
}

export default Cart
