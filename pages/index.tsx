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

        <title>Fake Boutique | The place where you cant buy fake product </title>
        <meta name="google-site-verification" content="P0JbfWrLIEEyviw-PmnF6_zp76BreJadF3dIxuivX0g" />
        <meta property="og:title" content="Fake Boutique" key="title" />
        <meta name="description" content="Fake Boutique online is a place where you can't buy stuff you want because it do not really exist" />
        <meta name="keywords" content="boutique, product, new arrivals, top products,what is ecommerce, ecommerce website,best ecommerce platform" />
        <meta name="author" content="AlexandreByDefault" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="copyright" content="FakeStoreApi"></meta>
        <meta name="category" content="Ecommerce"></meta>
        <meta name="subject" content="Store online, Buy Product"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:title" content="Fake Boutique" />
        <meta name="og:type" content="ecommerce" />
        <meta name="og:region" content="US" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="yes" name="apple-touch-fullscreen" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width = 320, initial-scale = 2.3, user-scalable = no" />
      </Head>

      <main className={style.container}>
        <div className={style.section}>
          <h1 className={style.titleHero}>
            THE BEST FAKE PRODUCT IN THE WORLD
          </h1>
          <p className={style.intro}>
            You might looking for a new t-shirt or a luxury watch to impress
            your girlfriend or your friend. Well ! you are on the good place !
            here we have all of that and more ! Amazing right ? Take a look at
            all our product in Products{" "}
          </p>
        </div>

        <div className={style.flexproduct}>
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
  const reducedNewProducts = reduceArray(newProducts, 4);
  const reducedRecommandedProducts = reduceArray(recommendedProducts, 4);
  return {
    props: {
      topProducts: reducedRecommandedProducts,
      newProducts: reducedNewProducts,
    },
    revalidate: false,
  };
}
