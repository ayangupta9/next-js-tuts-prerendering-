function UserList ({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      <ol>
        {users.map(user => {
          return (
            <li key={user.id}>
              {/* {user.id} */}
              {/* <br></br> */}
              {user.name}
              <br></br>
              {user.email}
              <br></br>
              {user.address.street} {user.address.suite} {user.address.city}
              <br></br>
              <br></br>
            </li>
          )
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
