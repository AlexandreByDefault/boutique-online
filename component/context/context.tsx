import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  qty: number
  showCart: boolean
  setQty: (qty: number) => void
  setShowCart: (showCart: boolean) => void
}
const Context = createContext<ContextProps>({
  qty: 0,
  showCart: false,
  setQty: () => {},
  setShowCart: () => {}
});

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [qty, setQty] = useState<number>(1)
  const [showCart, setShowCart] = useState<boolean>(false)

  return (
    <Context.Provider value={{ qty, setQty, showCart, setShowCart }}>
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context)
