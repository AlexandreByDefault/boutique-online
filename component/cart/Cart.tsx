import Image from 'next/image'
import React from 'react'
import { useStateContext } from '../context/context'
import Product from '../product/Product'
import Style from './cart.module.css'



const Cart = () => {
  const { setShowCart, cartItems, onRemove } = useStateContext()
  return (
    <div className={Style.container}>
      <span className={Style.closeArrow} onClick={() => setShowCart(false)}> &larr; </span>
      {cartItems.length < 1 && <div className={Style.noAddedContainer}>
        <p>You add nothing to cart yet...</p>
        <button> Continue shopping ! </button>
        </div>}
    </div>
  )
}

export default Cart
