import Image from 'next/image'
import React from 'react'
import { useStateContext } from '../context/context'
import Product from '../product/Product'
import Style from './cart.module.css'
import MiniCartProduct from './mini-cart-product'



const Cart = () => {
  const { setShowCart, cartItems, onRemove } = useStateContext()
  return (
    <i className={Style.container}>
      <span className={Style.closeArrow} onClick={() => setShowCart(false)}> &larr; Back </span>
      {cartItems.length < 1 && <div className={Style.noAddedContainer}>
        <p>You add nothing to cart yet...</p>
        <button> Continue shopping ! </button>
      </div>}

      { cartItems.length >= 1 &&  cartItems.map((items) =>
        <MiniCartProduct key={items.id}
        title={items.title}
        image={items.image} id={items.id} price={items.price} quantity={items.quantity} />)}
    </i>

  )
}

export default Cart
