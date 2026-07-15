import React from 'react'
import { useParams } from 'react-router';

const ProductDetailPage = () => {
    const params =useParams();

  return (
    <div>
        <h1>Product Detail Page</h1>
        <p>Product ID: {params.id}</p>
    </div>
  )
}

export default ProductDetailPage