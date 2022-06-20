import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  qty:number
  decQty: () => void
  incQty: () => void
  showCart: boolean
  setQty:() => number
  setShowCart: () => number
}
const Context = createContext<ContextProps | null>(null)

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [qty,setQty] = useState<number>(1)
  const [showCart,setShowCart] = useState<boolean>(false)


  const decQty = () => {
    setQty((prevQty ) => prevQty + 1)
  }

  const incQty = () => {
    setQty((prevQty) => prevQty - 1)
  }
  return(
    <Context.Provider value={{incQty, decQty,qty, showCart,setShowCart,setQty}}>
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context);
