import React, { Fragment } from 'react'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
  <Fragment>
    <main>
      <Header />
      {children}
    </main>
  </Fragment>
  )
}

export default Layout
