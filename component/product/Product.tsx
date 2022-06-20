import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

export interface ProductProps {
  id: number;
  title: string;
  image: string;
  description?: string;
  price: number;
  rating?: {
    rate: number;
    count: number
  };
}

const Product: FC<ProductProps> = ({ id, title, image, price }) => {
  let detailsProduct: string = `/products/${id}`;
  return (
    <li>
      <div>
        <Image src={image} alt={title} width={150} height={150} layout={'fixed'} />
      </div>
      <p>{title}</p>
      <p>${price}</p>
      <Link href={detailsProduct}>
      <a>See more</a>
      </Link>
    </li>
  )
}

export default Product
