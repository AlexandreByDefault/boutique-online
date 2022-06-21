import React from 'react'
import { ProductProps } from '../../component/product/Product'
import { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import { reduceArray } from '../../component/utils/utils'
import { useStateContext } from '../../component/context/context'
import Image from 'next/image';
import StarRatings from 'react-star-ratings';




const DetailProduct: NextPage = ({ params, similar }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, rating, price, description, category, image, id } = params
  const { showCart,incQty,decQty,qty, onAdd,cartItems,totalPrice,totalQuantities} = useStateContext()

  console.log(cartItems);
  

  return (
    <div>
      <div>
        <div>
          {/* <Image /> */}
        </div>

        <div>
          <h1>{price}</h1>
          <p>{description}</p>
          <StarRatings numberOfStars={5} rating={rating.rate} starRatedColor={'#FFB627'} starDimension={'15'} />
        </div>

        <div>
          <span onClick={() => onAdd(params,qty)}>Add</span>
          <span onClick={incQty}> ± </span>
          <span>{qty}</span>
          <span onClick={decQty}> - </span>

          <div>

            <p>{cartItems.length}</p>
            <p>{totalPrice}</p>

          </div>
        </div>


      </div>

    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const params = context.params?.id;
  const productId = products.find(
    (product: ProductProps) => product.id.toString() === params
  );
  const sameCategory = await products.filter(
    (product: ProductProps) => product.category === productId.category
  );
  const reducedSameCategory = reduceArray(sameCategory, 6);


  return {
    props: {
      params: productId,
      similar: reducedSameCategory,
    },
    revalidate: 1800,
  };

}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const ids = products.map((product: ProductProps) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths: ids,
    fallback: false,
  };
}


export default DetailProduct
