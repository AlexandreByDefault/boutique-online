import React from 'react'
import { ProductProps } from '../../component/product/Product'
import { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import { reduceArray } from '../../component/utils/utils'
import Cart from '../../component/cart/Cart'

type Props = {}
const DetailProduct : NextPage = ({params,similar}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      DetailProduct
      <button onClick={''}></button>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const params = context.params?.id;
  const productId = products.find(
    (product : ProductProps) => product.id.toString() === params
  );
  const sameCategory = await products.filter(
    (product : ProductProps) => product.category === productId.category
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
    const ids = products.map((product : ProductProps) => ({
      params: { id: product.id },
    }));

    return {
      paths: ids,
      fallback: false,
    };
  }


  export default DetailProduct
