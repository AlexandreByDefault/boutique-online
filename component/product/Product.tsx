import Image from 'next/image';
import React,{FC}from 'react'

export interface Product {
  id: number;
  name: string;
  cover: string;
  description?: string;
  price: number;
  rating?: number;
}

const Product: FC<Product> = ({id,name,cover,price,rating}) => {
  return (
<div>
    <div>
      <Image src={cover} alt={name}  width={150} height={150} layout={'fixed'}/>
    </div>
    <p>{name}</p>
    <p>{price}</p>
</div>
  )
}

export default Product
