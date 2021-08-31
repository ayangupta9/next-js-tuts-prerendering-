import React from 'react'

const ProductList = ({ products }) => {
  return (
    <>
      <h1>List Of Products</h1>
      {products.map(product => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title}
            </h2>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default ProductList

export async function getStaticProps () {
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()

  return {
    props: {
      products: data
    }
  }
}
