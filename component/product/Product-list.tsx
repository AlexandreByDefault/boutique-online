import React, { FC } from 'react'
import Product, { ProductProps } from './Product'
type Products = {
  items: [ProductProps];

}

const Products: FC<Products> = ({ items }) => {
  return (
    <ul>
      {
        items.map((items) => <Product
          key={items.id}
          title={items.title}
          image={items.image} id={items.id} price={items.price} />)
      }

    </ul>
  )
}

export default Products
