import React from 'react'
import Link from 'next/link'

type Props = {}

const about = (props: Props) => {
  return (
    <div className='container'>
      <p>This Page was made with the FakeStopeAi for my portfolio</p>
      <div className='link'>
      <Link href={'https://github.com/AlexandreByDefault'}>
      <a>GITHUB</a>
      </Link>
      <Link href={'https://www.linkedin.com/in/alexandre-desir-3200811b2/'}>
      <a>LinkedIn</a>
      </Link>
      <a href='mailto:alexandre.desir@icloud.com'>My mail</a>

      </div>

      <style jsx>
        {
          `.container{
            height:90vh;
            text-align:center;
          }
          .container p{
            font-size:clamp(16px,4rem,10rem);
          }
          .link{
            display:flex;
            justify-content:center;
            flex-direction:column;
            background-color:black;
            color:white;
            font-size:clamp(16px,4rem,10rem);
          }`
        }
      </style>
    </div>
  )
}

export default about
