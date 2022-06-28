import Link from 'next/link'
import React from 'react'

type Props = {}

const contact = (props: Props) => {
  return (
    <div>
      <Link href={'https://github.com/AlexandreByDefault/'}>
        <a className=''> My Github</a>
      </Link>
      <Link href={''}>
        <a href="mailto:alexandre.desir@icloud.com">My Mail</a>
      </Link>
    </div>
  )
}

export default contact
