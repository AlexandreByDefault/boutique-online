import React from 'react'
import Products from '../../component/product/Product-list'
import { ProductProps } from '../../component/product/Product'
import { NextPage,InferGetStaticPropsType } from 'next';

const AllProducts : NextPage = () => {
  return (<div>


    <Products>
  </div>
  )
};

export default AllProducts
