import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useStateContext } from '../context/context'
import Cart from '../cart/Cart'

import SVGCart from '../../public/cart.svg'

const Header = () => {
  const {setShowCart,showCart,totalQuantities} = useStateContext()
  return (
<nav className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <Link href={'/'}>
      <a className="nav-title">
        Fake Boutique Online
      </a>
    </Link>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div className="nav-links">
    <Link href="/products" >
      <a> Product</a>
    </Link>
    <Link href="/about" >
    <a>About</a>
    </Link>
    <a className='header-total' onClick={() => setShowCart(true)}>
    <SVGCart/>
    <span className='total'>{totalQuantities}</span>
    </a>
  </div>
  <style jsx>
    {
      `
      .nav {
        height: 50px;
        width: 100%;
        background-color: black;
        position: relative;
        z-index:1;
      }

      .nav > .nav-header {
        display: inline;
      }

      .nav > .nav-header > .nav-title {
        display: inline-block;
        font-size: 22px;
        color: #fff;
        padding: 10px 10px 10px 10px;
      }

      .nav > .nav-btn {
        display: none;
      }

      .nav > .nav-links {
        display: flex;
        float: right;
        font-size: 18px;
        jusfify-content:center;
        margin-right:10px;
        position:relative;

      }

      .nav > .nav-links > a {
        display: inline-block;
        padding: 13px 10px 13px 10px;
        text-decoration: none;
        color: #efefef;
      }

      .nav > .nav-links > a:hover {
        background-color: rgba(0, 0, 0, 0.3);
      }

      .nav > #nav-check {
        display: none;
      }

      @media (max-width:600px) {
        .nav > .nav-btn {
          display: inline-block;
          position: absolute;
          right: 0px;
          top: 0px;
        }
        .nav > .nav-btn > label {
          display: inline-block;
          width: 50px;
          height: 50px;
          padding: 13px;
        }
        .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
          background-color: rgba(0, 0, 0, 0.3);
        }
        .nav > .nav-btn > label > span {
          display: block;
          width: 25px;
          height: 10px;
          border-top: 2px solid #eee;
        }
        .nav > .nav-links {
          position: absolute;
          display: block;
          width: 100%;
          background-color: #333;
          height: 0px;
          transition: all 0.3s ease-in;
          overflow-y: hidden;
          top: 50px;
          left: 0px;
        }
        .nav > .nav-links > a {
          display: block;
          width: 100%;
          text-align:center;
        }
        .nav > #nav-check:not(:checked) ~ .nav-links {
          height: 0px;
        }
        .nav > #nav-check:checked ~ .nav-links {
          height: calc(30vh - 50px);
          overflow-y: auto;
        }
        .total{
          background-color: red;
    padding: 2px 5px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    position: absolute;
    top: 16px;
    right: 174px;
    font-size: 13px;
        }
        .header-total{
          position:relative;
        }

      }
      .total{
        background-color: red;
    padding: 2px 5px;
    border-radius: 20px;
    position: absolute;
    top: 16px;
    right: -p10px;
    font-size:13px
      }
      .header-total{
        position:relative;
      }
      `

    }
  </style>
  {showCart && <Cart/>}
</nav>)
}

export default Header
