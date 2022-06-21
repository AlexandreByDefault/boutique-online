import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  qty: number
  showCart: boolean
  setQty: (qty: number) => void
  setShowCart: (showCart: boolean) => void
  incQty:(qty: React.MouseEvent) => void
  decQty:(qty: React.MouseEvent) => void
}
const Context = createContext<ContextProps>({} as ContextProps);

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [qty, setQty] = useState<number>(1)
  const [showCart, setShowCart] = useState<boolean>(false)


  const incQty = () => {
    if(qty !== 50){
      setQty((prevQty) => prevQty + 1 )
    }
  }
  const decQty = () => {
    if(qty <= 0){
      return 0
    }
    setQty((prevQty) => prevQty - 1 )
  }

  return (
    <Context.Provider value={{qty, setQty, incQty, decQty,showCart, setShowCart }}>
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context)
