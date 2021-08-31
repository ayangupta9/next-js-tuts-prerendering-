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

/*
 * getstaticprops runs on the server side and not on client side.
 * It wont even be included in JS bundle while building.
 * We can run server side code in getStaticProps module
 * getStaticProps is allowed only in a page and cannot be run from a regular component file
 * It is used only for pre-rendering and not client side data fetching
 * gsp should return an object which should contain a props key and contain some data as value
 * gsp will run at buildtime (for production). 
 */
