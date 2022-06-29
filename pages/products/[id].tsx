import React, { Fragment } from 'react'
import { ProductProps } from '../../component/product/Product'
import { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import { reduceArray } from '../../component/utils/utils'
import { useStateContext } from '../../component/context/context'
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import Head from "next/head";
import Products from '../../component/product/Product-list';
import Style from '../../styles/id.module.css'




const DetailProduct: NextPage = ({ params, similar }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, rating, price, description, category, image, id } = params
  const {onAdd} = useStateContext()


  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={description} />
        <meta name="author" content="AlexandreByDefault" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={Style.main}>
        <div className={Style.imgcontainer}>
          <Image src={image} width={'100%'} height={'100%'} alt={title} layout={'responsive'} priority={false} />
        </div>
        <div className={Style.meta}>
          <div className={Style.infos}>
            <h2 className={Style.title}>{title}</h2>
            <p className={Style.description}>{description}</p>
          </div>
          <div>
            <div className={Style.rank}>
              <StarRatings starRatedColor='#FF9933' starDimension='30px' rating={rating.rate} />
              <span> ({rating.count})</span>
            </div>
            <p className={Style.price}> ${price}</p>
          </div>
          <div className={Style.btnContainer}>
            <button className={Style.add} onClick={() => onAdd(params)}>Add to Cart </button>
            <button onClick={() => alert("HAHA YOU CAN'T BUY IT, I TOLD YOU =)")} className={Style.buy}>Buy now </button>
          </div>
        </div>
      </main>
          <div className={Style.productRecommandation}>
            <h4 className={Style.similar}>
              Product in the same category
            </h4>
            <div>
            <Products items={similar} />
            </div>
          </div>

    </Fragment>
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
  const reducedSameCategory = reduceArray(sameCategory, 4);


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
