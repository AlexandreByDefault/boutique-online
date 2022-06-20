import React, { useState } from 'react'
import Products from '../../component/product/Product-list'
import { ProductProps } from '../../component/product/Product'
import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';

const AllProducts: NextPage = ({ category, products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filterProduct, setFilterProducts] = useState(products)

  const handleProductsCategories = (category: string) => {
    const filtered : ProductProps = products.filter(
      (product: ProductProps) => product.category === category
    );
    setFilterProducts(filtered)
    return filtered;
  };
  return (<div>
    <Products items={filterProduct} />
  </div>
  )
};

export default AllProducts


export const getStaticProps: GetStaticProps = async (context) => {

  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  const responses = await Promise.all([categories, products]);
  return {
    props: {
      category: responses[0],
      products: responses[1],
    },
    revalidate: 1800,
  };
}
