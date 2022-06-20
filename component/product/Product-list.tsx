import React,{FC} from 'react'

type Products = {
  items:[object]
}

const Products:FC<Products> = ({items}) => {
  return (
    {items.map}
  )
}

export default Products
