import React from 'react'

const NewsCategory = ({ articles, category }) => {
  return (
    <>
      <h2>News articles under {category}</h2>
      {articles.map(article => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default NewsCategory

export async function getServerSideProps (context) {
  const { params, req, res, query } = context
  console.log(query)
  console.log(req.headers.cookie)
  res.setHeader('Set-Cookie', ['name=Ayan'])

  const { category } = params

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  )
  const data = await response.json()

  return {
    props: {
      articles: data,
      category: category
    }
  }
}
