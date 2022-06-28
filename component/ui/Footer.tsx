import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='container'>
    <p>This website made with love with &hearts; with <Link href={'https://fakestoreapi.com/'}>fakestoreapi.com</Link></p>
    <style jsx>{

      `.container{
        background-color: cornflowerblue;
        display: flex;
        justify-content:center;
        text-align:center;
      }`
    }
    </style>
      </div>
  )
}

export default Footer
