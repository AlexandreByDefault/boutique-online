import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useStateContext } from '../context/context';
import Style from './product.module.css'

export interface ProductProps {

  id: number;
  title: string;
  category?: string
  image: string;
  description?: string;
  price: number;
  rating?: {
    rate: number;
    count: number
  };
  quantity: number
}



const Product: FC<ProductProps> = ({ id, title, image, price }) => {
  let detailsProduct: string = `/products/${id}`;
  const {onAdd} = useStateContext()
  return (
    <li className={Style.container}>
    <Link href={detailsProduct}>
      <a>
      <div className={Style.img}>
        <Image src={image} alt={title} width={150} height={150} layout={'fixed'}/>
      </div>
      <p className={Style.title}>{title}</p>
      <p className={Style.price}>${price}</p>
      </a>
    </Link>

    </li>)}

export default Product
