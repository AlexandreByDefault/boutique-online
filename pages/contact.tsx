import Link from 'next/link'
import React from 'react'

type Props = {}

const contact = (props: Props) => {
  return (
    <div className='container'>
      <Link href={'https://github.com/AlexandreByDefault/'}>
        <a className=''> My Github</a>
      </Link>
      <Link href={''}>
        <a href="mailto:alexandre.desir@icloud.com">My Mail</a>
      </Link>

      <style jsx>
        {
          `.container{
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            height:90vh;
          }`
        }
      </style>
    </div>
  )
}

export default contact
