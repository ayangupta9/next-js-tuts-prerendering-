import { useRouter } from 'next/dist/client/router'

export default function Post ({ post }) {
  
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  )
}

export async function getStaticPaths () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  // const paths = data.map(post => {
  //   return {
  //     params: {
  //       postid: post.id.toString()
  //     }
  //   }
  // })

  return {
    paths:
      // paths.slice(0, 10),
      [
        {
          params: { postid: '1' }
        },
        {
          params: { postid: '2' }
        },
        {
          params: { postid: '3' }
        }
      ],
    fallback: true
  }
}

export async function getStaticProps (context) {
  const { params } = context
  console.log(params)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  )

  const data = await response.json()
  
  return {
    props: {
      post: data
    }
  }
}
