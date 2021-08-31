import { useRouter } from 'next/dist/client/router'
import React from 'react'

const Product = ({ product }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>
        {product.id} {product.title}
      </h2>
      <p>{product.description}</p>
      <hr />
    </div>
  )
}

export async function getStaticPaths () {
  return {
    paths: [{ params: { productid: '1' } }],
    fallback: true
  }
}

export async function getStaticProps (context) {
  const { params } = context
  const response = await fetch(`http://localhost:4000/${params.postid}`)

  const data = await response.json()

  return {
    props: {
      product: data
    }
  }
}

export default Product
