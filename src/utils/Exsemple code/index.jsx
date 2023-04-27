
//pages/events/index.jsx
import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"

export const EventsPage = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    //mockFetch('/events.json')
    fetch('fjdskjfklds')
      .then(res => res.json())
      .then(data => {
        setEvents(data)
      })
      .catch((err) => {
        setError('произошла ошибка')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {
        events.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))
      }
    </div>
  )
}

//utils/mockFetch.js
export const mockFetch = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.75) resolve(fetch(url))
    else reject(new Error('mock fetch failed'))
  }, 1500)
})

//loader/index.jsx
export const Loader = () => {
  return (
    <div>
      Loading...
    </div>
  )
}

//useEventPage.js
import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"

export const useEventPage = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    mockFetch('/events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data)
      })
      .catch((err) => {
        setError('произошла ошибка')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    events, loading, error
  }
}