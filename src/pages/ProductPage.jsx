import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router';

const ProductPage = () => {
    const [product, setProduct]= useState([]);

    const query = useSearchParams();

    console.log(query[0].get('limit'));

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, []);

  return (
    <div>
        <h1>Product page</h1>
        <ol>
            {product.map(product => (
                <li key={product.id}>
                   <Link to={`/product/${product.id}`}> {product.title}</Link>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default ProductPage