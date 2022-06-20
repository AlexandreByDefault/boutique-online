import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  children? : React.ReactNode
  qty:number
  decQty: () => void
  incQty: () => void
}
const Context = createContext<ContextProps | null>(null)

const StateContext = ({children}: ContextProps) => {
  const [qty,setQty] = useState<number>(1)


  const decQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const incQty = () => {
    setQty((prevQty) => prevQty - 1)
  }
  return(
    <Context.Provider value={{incQty, decQty,qty}}>
      {children}
    </Context.Provider>
  )
}
