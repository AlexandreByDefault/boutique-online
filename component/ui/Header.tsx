import Link from 'next/link'
import React from 'react'
import Cart from '../cart/Cart'
import { useStateContext } from '../context/context'

const Header = () => {
  const {setShowCart,showCart} = useStateContext()
  return (
    <nav>
      <Link href={'/' }>
      <a>Fake Store Online </a>
      </Link>
      <ul>
        <Link href={'/'}>
        <a>Products </a>
        </Link>
        <Link href={'/'}>
        <a>Contact </a>
        </Link>
        <Link href={'/'}>
        <a>About </a>
        </Link>
      </ul>

      <div>
        <button onClick={() => setShowCart(true)}> panier</button>
      </div>
      {showCart && <Cart/>}
    </nav>
  )
}

export default Header
