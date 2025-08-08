import React, { useEffect, useState } from 'react'
import Product from './Product'
import { getProduct } from './Api'
import ProductList from './ProductList'

const Relatedproducts = ({ id }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let relatedProducts = [];
        for (let i = 1; i < 4; i++) {
            getProduct(parseInt(id) + i).then((item) => {
                
                if(item){
                    relatedProducts.push(item);
                    
                }
                if(relatedProducts.length === 3) {
                    setProducts(relatedProducts);
                }
            })
        }

    }, [id])



    if (products.length === 0) {
        return <>Loading...</>
    }
    console.log(products)
    // Assuming you want to display related products based on the current product's ID
    return (
        <div className='mt-5'>
            <p className='text-3xl font-semibold text-gray-800 ml-7'>Related Products</p>
            <ProductList products={products} />
        </div>
    )
}

export default Relatedproducts
