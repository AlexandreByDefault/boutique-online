import React, { Fragment } from 'react'
import { ProductProps } from '../../component/product/Product'
import { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import { reduceArray } from '../../component/utils/utils'
import { useStateContext } from '../../component/context/context'
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import Head from "next/head";
import Products from '../../component/product/Product-list';




const DetailProduct: NextPage = ({ params, similar }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, rating, price, description, category, image, id } = params
  const { showCart, incQty, decQty, qty, onAdd, cartItems, totalPrice, totalQuantities } = useStateContext()


  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name={title} content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className='container'>
          <div className='img'>
            <Image src={image} width={'100%'} height={'100%'} alt={title} layout={'responsive'} />
          </div>
          <div className='meta'>
              <div className='description-container'>
                <h2 className='title'>{title}</h2>
                <p className='description'>{description}</p>
              </div>
              <div>
                <StarRatings starRatedColor='#FF9933' starDimension='30px' rating={rating.rate}/>
                <span> ({rating.count})</span>
                <p className='title'>Price : <span className='price'> ${price}</span> </p>
              </div>

              <div>
                <div className='flexbox'>
                  <span onClick={decQty} className='box menos'> - </span>
                  <span className='box qty'>{qty}</span>
                  <span onClick={incQty} className='box grande'>+</span>
                </div>
                <button className='btn' onClick={() => onAdd(params)}>Add to Cart </button>
                <button onClick={() => alert("HAHA YOU CAN'T BUY IT, I TOLD YOU =)")} className='btn buy'>Buy now </button>
              </div>
          </div>

        </div>

          <div>
            <h4 className='sub-title'>Product in the same category</h4>
            <Products items={similar} />
          </div>
      </main>
      <style jsx>

        {

          `.container{
            display:flex;
            flex-direction:row;

            @media (min-width: 320px) {
              flex-direction: column;
            }
          }
          .img{
            min-width:500px;
            height:500px;
            @media (max-width: 768px) {
              min-width:300px;
              height:300px;
            };
          }
          .meta{
            padding-left:10px;
          }
          .description-container{
            display:flex;
            flex-direction:column;
            justify-items:center;
            justify-content:center;

          }
          .title{
            max-width: 58rem;
            font-size:1.5rem;
          }
          .description{
            max-width: 58rem;
            font-size:1.5rem;
          }
          .price{
            font-weight:bold;
          }

          .flexbox{
            margin-bottom:30px
          }

          .box{
            font-size:30px;
            border:1px solid #A1C7E0;
            padding:10px 20px;

          }

          .btn{
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
          .buy{
            border-top: 3px solid  #45C4B0;
            border-bottom: 3px solid #9AEBA3;
          }
          .sub-title{
            padding-left:20px;
          }`
        }
      </style>
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
