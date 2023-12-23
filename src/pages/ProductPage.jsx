import React, { useEffect } from 'react'
import Header from '../components/Header'
import Topbar from '../components/Product/Topbar'
import ProductSidebar from '../components/Product/ProductSidebar'
import Products from '../components/Product/Products'
import '../components/Product/styles.css';
import { useDispatch,useSelector } from 'react-redux'
import { searchProductsRequest } from '../Features/search/searchSlice'

const ProductPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(searchProductsRequest(''));
    console.log("search called");
  },[dispatch])
  return (
    <>
    <Header/>
    <Topbar/>
    <ProductSidebar/>
    <Products/>
    </>
  )
}

export default ProductPage