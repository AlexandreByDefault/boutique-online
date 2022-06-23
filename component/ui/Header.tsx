import Link from 'next/link'
import React from 'react'
import Cart from '../cart/Cart'
import { useStateContext } from '../context/context'

const Header = () => {
  const {setShowCart,showCart,totalQuantities} = useStateContext()
  return (
    <nav className='container'>
      <div>
      <Link href={'/' }>
      <a className='block'>Fake Store Online </a>
      </Link>
      </div>
      <ul>
        <Link href={'/products'}>
        <a>Products </a>
        </Link>
        <Link href={'/'}>
        <a>Contact </a>
        </Link>
        <Link href={'/'}>
        <a>About </a>
        </Link>
      </ul>

      <div className='parent'>
        <span className='lenght'>{1}</span>
        <button className='btn' onClick={() => setShowCart(true)}> Cart </button>
      </div>
      {showCart && <Cart/>}

      <style jsx>
        {
          `.container{
            display:flex;
            background-color:salmon;
            justify-content:space-between;
            justify-items:center;
            color: white;
          }
          .container div{
            display:flex;
            justify-items:center;
            justify-content:space-between;
          }
          .block{
            padding:15px 5px;
          }

          .btn{
            border:transparent;
            border-radius:5px;
            background-color: cornflowerblue;
            width: 100px;
            color: white;
          }

          .parent{
            position: relative;
          }
          .lenght{
            position: absolute;
            top:10px;
            right: 5px;
            background-color:white;
            padding: 3px 7px;
            color:black;
            border-radius:30px;
            font-size:10px;
          }`
        }
      </style>
    </nav>
  )
}

export default Header
