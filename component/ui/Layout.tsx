import React, { Fragment } from 'react'
import Footer from './Footer'
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
      <Footer />
    </main>
  </Fragment>
  )
}

export default Layout
