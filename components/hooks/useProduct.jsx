"use client";
import {useState, useEffect} from "react";

const useProduct = ()=>{
    const [products,setProducts] = useState([]);

    const getData = async()=>{
    const data = await fetch("https://dummyjson.com/products");
    const jsonData = await data.json();
    setProducts(jsonData.products ?? []);
    }

    useEffect(()=>{
        getData();
    },[])

    return {products}

};
export default useProduct;