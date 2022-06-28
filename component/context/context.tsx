import React, { createContext, ProviderProps, useContext, useEffect, useState } from "react";
import { cursorTo } from "readline";
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
  total: number
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
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);
  const [totalQuantities, setTotalQuantities] = useState(0);

  const total = cartItems.reduce((t, c) => t + c.price * c.quantity, 0)


  useEffect(() => {
    const total = localStorage.getItem('total')

    if (total) {
      JSON.parse(total)
    }

    const quantity = localStorage.getItem('quantity')

    if (quantity) {
      setTotalQuantities(JSON.parse(quantity))
    };

    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      setCartItems(JSON.parse(cartItems))
    };

    const qty = localStorage.getItem('qty')
    if (qty) {
      setQty(JSON.parse(qty))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('total', JSON.stringify(total))
    localStorage.setItem('quantity', JSON.stringify(totalQuantities))
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    localStorage.setItem('qty', JSON.stringify(qty))

  }, [total, totalQuantities, cartItems, qty])




  const onAdd = (clickedItem: ProductProps) => {
    setTotalQuantities(
      cartItems.reduce((total, current) => total + (current.quantity || 0), 1)
    )
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
    setTotalQuantities(
      cartItems.reduce((total, current) => total + (current.quantity || 0), 1)

    )

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

  const incQty = (id: number) => {
    const find: ProductProps = cartItems.find(item => item.id == id)
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems([...newCart, { ...find, quantity: find?.quantity + 1 }]);
  }
  const decQty = (id: number) => {
    let find: ProductProps = cartItems.find(item => item.id == id)
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems([...newCart, { ...find, quantity: find?.quantity - 1 }]);
    if (find.quantity < 1) {
      setCartItems([...newCart])
    }
  }

  return (
    <Context.Provider value={{ onRemove, cartItems, totalQuantities, setTotalQuantities, onAdd, qty, setQty, incQty, decQty, showCart, setShowCart, total }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
