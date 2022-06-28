import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='container'>
    <p>This website made with love with &hearts; with <Link href={'https://fakestoreapi.com/'}>fakestoreapi.com</Link></p>
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
