import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'

const EventsList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  async function fetchSportsEvents () {
    const response = await fetch('http://localhost:4000/events?category=sports')
    const data = await response.json()
    setEvents(data)
    router.push('/events?category=sports', undefined, { shallow: true })
  }

  return (
    <div>
      <button onClick={fetchSportsEvents}>SPORTS</button>
      <h2>List of Events</h2>
      {events.map(event => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} | {event.category}
            </h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default EventsList

export async function getServerSideProps (context) {
  const { query } = context
  const { category } = query
  const queryString = category ? 'category=sports' : ''
  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()

  return {
    props: {
      eventList: data
    }
  }
}
