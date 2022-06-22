import React, { createContext, ProviderProps, useContext, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import { ProductProps } from '../product/Product'

interface ContextProps {
  qty: number
  showCart: boolean
  setQty: (qty: number) => void
  setShowCart: (showCart: boolean) => void
  incQty: (qty: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  decQty: (qty: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  onAdd: Function
  totalPrice: number
  setTotalPrice: (totalPrice: number) => void
  totalQuantities: number
  setTotalQuantities: (totalQuantities: number) => void
  cartItems: ProductProps[]
  onRemove: Function

}
const Context = createContext<ContextProps>({} as ContextProps);

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [qty, setQty] = useState<number>(1);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<ProductProps[] >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState(0);


  const onAdd = (clickedItem: ProductProps) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };


  const onRemove = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ProductProps[])
    );
  };
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
      <Context.Provider value={{ onRemove, cartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice, onAdd, qty, setQty, incQty, decQty, showCart, setShowCart }}>
        {children}
      </Context.Provider>
    )
  }

  export const useStateContext = () => useContext(Context)
