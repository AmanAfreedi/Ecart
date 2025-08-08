import React from 'react'
import Product from './Product'

const ProductList = ({products}) => {
  return (
    <div className='md:grid grid-cols-3 max-w-6xl justify-center'>
      {products.map(function(item){
        return <Product title={item.title} price={item.price} category={item.category} img={item.thumbnail} id={item.id} />
      })}
    </div>
  )
}

export default ProductList
