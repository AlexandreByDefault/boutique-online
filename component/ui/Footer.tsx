import Link from 'next/link'
import React from 'react'



const Footer = () => {
  return (
    <div className='container'>
    <p>This website made with &hearts; and <Link href={'https://fakestoreapi.com/'}>fakestoreapi.com</Link></p>
    <style jsx>{

      `.container{
        background-color: black;
        display: flex;
        justify-content:center;
        text-align:center;
        color:white;
      }`
    }
    </style>
      </div>
  )
}

export default Footer
