import React, { Fragment, useState } from 'react'
import Products from '../../component/product/Product-list'
import { ProductProps } from '../../component/product/Product'
import Head from 'next/head'
import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';

const AllProducts: NextPage = ({ category, products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filterProduct, setFilterProducts] = useState(products)

  const handleProductsCategories = (category: string) => {
    const filtered: ProductProps = products.filter(
      (product: ProductProps) => product.category === category
    );
    setFilterProducts(filtered)
    return filtered;
  };
  return (<Fragment>
    <Head>
      <title>Fake Boutique</title>
      <meta name="home" content="See all our fake product that don't exist" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className='btnContainer'>

        <button
          onClick={() => setFilterProducts(products)}
        >
          All
        </button>
        <button
          onClick={(e) => handleProductsCategories(e.currentTarget.value)}
          value={category[0]}
        >
          {category[0]}
        </button>
        <button
          onClick={(e) => handleProductsCategories(e.currentTarget.value)}
          value={category[1]}
        >
          {category[1]}
        </button>
        <button
          onClick={(e) => handleProductsCategories(e.currentTarget.value)}
          value={category[2]}
        >
          {category[2]}
        </button>
        <button
          onClick={(e) => handleProductsCategories(e.currentTarget.value)}
          value={category[3]}
        >
          {category[3]}
        </button>

        <style jsx>
          {
            `button{
              border-top: 3px solid  cornflowerblue;
              border-bottom: 3px solid  salmon;
              border-left: none;
              border-right:none;
              background-color: white;
              color: black;
              font-size: 1.5rem;
              margin-left:10px;
              border-radius: 10px;
              cursor:pointer;
            }

            .btnContainer{
              display:flex;
              justify-content:center;
              align-items:center;
              margin-top:10px;
            }`
          }
        </style>
      </div>
      <section>
        <Products items={filterProduct} />
      </section>
    </main>

  </Fragment>
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
