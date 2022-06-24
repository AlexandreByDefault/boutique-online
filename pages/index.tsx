import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import { ProductProps } from '../component/product/Product'
import Head from 'next/head'
import { Fragment } from 'react'
import { reduceArray } from '../component/utils/utils'
import Products from '../component/product/Product-list'
import style from "../styles/home.module.css";

const Home: NextPage = ({ topProducts, newProducts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Fragment>
      <Head>
        <title>Fake Boutique</title>
        <meta name="home" content="Fake Boutique online is a place where you can't buy stuff you want because it do not really exist" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className={style.container}>
          <div className={style.section}>
            <h1 className={style.titleHero}>
              Welcome to <span> Fake Boutique </span>{" "}
            </h1>
            <p className={style.intro}>
              You might looking for a new t-shirt or a luxury watch to impress
              your girlfriend or your friend. Well ! you are on the good place !
              here we have all of that and more ! Amazing right ? Take a look at
              all our product in Products{" "}
            </p>
          </div>

          <div>
            <h3 className={style.subTitle}>Top rated products</h3>
            <Products items={topProducts} />
            <h3 className={style.subTitle}>New Arrivals</h3>
            <Products items={newProducts} />
          </div>


      </main>


    </Fragment>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const recommendedProducts = products.filter((product: ProductProps) => (product.rating!.rate >= 4.4));
  const newProducts = products.filter((product: ProductProps) => (product.rating!.rate <= 3.4));
  const reducedNewProducts = reduceArray(newProducts, 5);
  const reducedRecommandedProducts = reduceArray(recommendedProducts, 5);
  return {
    props: {
      topProducts: reducedRecommandedProducts,
      newProducts: reducedNewProducts,
    },
    revalidate: false,
  };
}
