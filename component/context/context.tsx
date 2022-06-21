import React, { createContext, useContext, useState } from "react";
import Product from "../product/Product";
import {ProductProps} from '../product/Product'

interface ContextProps {
  qty: number
  showCart: boolean
  setQty: (qty: number) => void
  setShowCart: (showCart: boolean) => void
  incQty:(qty: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  decQty: (qty: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  onAdd: Function
  totalPrice: number
  setTotalPrice: (totalPrice: number) => void
  totalQuantities: number
  setTotalQuantities:(totalQuantities: number) => void
  cartItems:ProductProps[]

}
const Context = createContext<ContextProps>({} as ContextProps);

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [qty, setQty] = useState<number>(1);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState <ProductProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState(0);


  const onAdd = (product: ProductProps, qty?:number )=> {
    const checkItemsExist = cartItems.map(item => item.id === product.id)
    setCartItems((prevState)=> [...prevState, {...product}])
    setTotalPrice(prevTotalPrince => prevTotalPrince + product.price)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities)

  }

  const incQty = () => {
    if (qty !== 50) {
      setQty((prevQty) => prevQty + 1)
    }
  }
  const decQty = () => {
    if (qty <= 0) {
      return 0
    }
    setQty((prevQty) => prevQty - 1)
  }

  return (
    <Context.Provider value={{cartItems,totalQuantities,setTotalQuantities, totalPrice, setTotalPrice, onAdd, qty, setQty, incQty, decQty, showCart, setShowCart }}>
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context)
