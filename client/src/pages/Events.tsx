import { Container } from "react-bootstrap"
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export function Events() {
  interface Event {
    title: string,
    date: Date,
    description: string,
    img_link: string
  }

  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async() => {
      axios
      .get("http://localhost:3000/drinks")
      .then((res: AxiosResponse) => {
        setEvents(res.data)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }
    fetchEvents()
  }, [])

  return (
    <>
      <div className='section justify-content-center w-100'>
        <Container className="px-lg-5">
          <div className='row text-center'>
            <div className='col-12 pt-5 font-size-2 primary-text'>
              Events
            </div>
          </div>
        </Container>
      </div>
      <div className='section justify-content-center w-100'>
        <Container className="px-lg-5">

        </Container>
      </div>
    </>
  )

}
