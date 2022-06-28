import React, { FC } from 'react'
import Product, { ProductProps } from './Product'
import Style from './product-list.module.css'
type Products = {
  items: [ProductProps];

}

const Products: FC<Products> = ({ items }) => {
  return (
    <div className={Style.main}>

    <ul className={Style.container}>
      {
        items.map((items) => <Product
          key={items.id}
          title={items.title}
          image={items.image} id={items.id} price={items.price} quantity={0} />)
      }
    </ul>
    </div>
  )
}

export default Products
