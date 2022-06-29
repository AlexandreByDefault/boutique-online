import React, { Fragment, useState } from 'react'
import Products from '../../component/product/Product-list'
import { ProductProps } from '../../component/product/Product'
import Head from 'next/head'
import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import Style from '../../styles/all.module.css'

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
      <title>Our Products</title>
      <meta name="description" content="See all our fake products that don't exist" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="AlexandreByDefault" />
      <meta name="keywords" content="boutique,store, product, new arrivals, top products," />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>

    <main className={Style.page}>
      <div className={Style.btnContainer}>

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
