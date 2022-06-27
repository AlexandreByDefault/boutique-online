
import React,{FC} from 'react'
import Product, { ProductProps } from '../product/Product'
import Image from 'next/image'
import Style from './mini-cart.module.css'
import { useStateContext } from '../context/context'



const MiniCartProduct: FC<ProductProps> = ({image, title, price, quantity,id}) => {
  const {incQty,decQty} = useStateContext()
  return (
    <li className={Style.container}>
          <p>{title}</p>
      <div className={Style.infos}>
        <div>
          <Image src={image} alt={title} width={150} height={100} />
        </div>
        <div>
          <p className={Style.price}> ${price * quantity}</p>
          <div>
              <span onClick={() => decQty(id)} > - </span>
              <span> {quantity} </span>
              <span onClick={() => incQty(id)}> + </span>
          </div>
        </div>
      </div>

    </li>
  )
}

export default MiniCartProduct
