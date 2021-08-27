function User ({ user }) {
  return (
    <>
      <li>
        {user.name}
        <br></br>
        {user.email}
        <br></br>
        {user.address.street} {user.address.suite} {user.address.city}
        <br></br>
        <br></br>
      </li>
    </>
  )
}

export default User
