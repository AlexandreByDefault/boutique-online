import type { NextPage ,InferGetStaticPropsType, GetStaticProps } from 'next'
import { ProductProps } from '../component/product/Product'
import Head from 'next/head'
import {  } from 'next'
import { reduceArray } from '../component/utils/utils'
import Products from '../component/product/Product-list'

const Home: NextPage = ({topProducts,newProducts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className=''>
      <Head>
        <title>Fake Boutique</title>
        <meta name="description" content="home page of the page fake boutique " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>


        <Products items={topProducts} />
        <Products items={newProducts} />


      </main>


      </div>





  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const recommendedProducts = products.filter((product: ProductProps)  =>  ( product.rating!.rate >= 4.4));
  const newProducts = products.filter((product : ProductProps) => ( product.rating!.rate<= 3.4));
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
