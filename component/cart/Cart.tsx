import Image from 'next/image'
import React from 'react'
import { useStateContext } from '../context/context'
import Product from '../product/Product'
import Style from './cart.module.css'
import MiniCartProduct from './mini-cart-product'



const Cart = () => {
  const { setShowCart, cartItems, onRemove,total, setEmpty} = useStateContext()
  return (
    <div className={Style.container}>

      <span className={Style.closeArrow} onClick={() => setShowCart(false)}> &larr; Back </span>
      <div className={Style.subContainer}>
        {cartItems.length < 1 && <div className={Style.noAddedContainer}>
          <p>You add nothing to cart yet...</p>
          <button onClick={() => setShowCart(false)}> Continue shopping ! </button>
        </div>}
        <div>

        { cartItems.length >= 1 &&  cartItems.map((items) =>
          <MiniCartProduct key={items.id}
          title={items.title}
          image={items.image} id={items.id} price={items.price} quantity={items.quantity} />)}
        </div>

          <div className={Style.btn}>
          <p className={Style.price}>TOTAL : <span> ${total}</span></p>
          <button onClick={() => alert("You can not buy fake product !")}> BUY ! </button>
          {cartItems.length >= 1 && <button onClick={() => setEmpty(true)}> Empty </button>}
          </div>
      </div>
    </div>

  )
}

export default Cart
