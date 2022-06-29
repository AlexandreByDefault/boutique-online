import React from 'react'
import Link from 'next/link'

type Props = {}

const about = (props: Props) => {
  return (
    <div className='container'>
      <div className='link'>
        <h2>Contact</h2>
        <Link href={'https://github.com/AlexandreByDefault'}>
          <a>GITHUB</a>
        </Link>
        <Link href={'https://www.linkedin.com/in/alexandre-desir-3200811b2/'}>
          <a>LinkedIn</a>
        </Link>
        <a href='mailto:alexandre.desir@icloud.com'>Mail</a>
      </div>

      <p>This Page was made with the FakeStoreApi for my portfolio</p>
      <style jsx>
        {
          `.container{
            height:90vh;
            text-align:center;
          }
          .container p{
            font-size:2rem;
          }
          .link{
            display:flex;
            justify-content:center;
            flex-direction:column;
            background-color:black;
            color:white;
            font-size:2rem;
          }`
        }
      </style>
    </div>
  )
}

export default about
