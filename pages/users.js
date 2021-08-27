import User from '../components/user'

function UserList ({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      <ol>
        {users.map(user => {
          return <User key={user.id} user={user} />
        })}
      </ol>
    </>
  )
}

export default UserList

export async function getStaticProps () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      users: data
    }
  }
}
