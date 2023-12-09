import { Container, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export function Reservation() {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [timeOptions, setTimeOptions] = useState([]);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  useEffect(() => {
    const dayOfWeek = daysOfWeek[date.getDay()]
    const fetchData = async () => {
      axios
      .get("http://localhost:3000/sessions_on/" + dayOfWeek)
      .then((res) => {
        setTimeOptions(res.data.map(x => x.start_time))
      })
      .catch((err) => {
        console.error(err.message)
      })
    };
    fetchData()
  }, [date])

  return (
    <div className='section justify-content-center w-100'>
      <Container className="px-lg-5">
        <div className='row text-center'>
          <div className='col-12 pt-5 pb-5 font-size-2 primary-text'>
            Book your Vietnamese Experience
          </div>
        </div>


        <div className='row'>
          <div className='col-12 col-md-4 ps-4 pt-3'>
            <div>
              Zen Cafe
            </div>
            <div>
              123 ABCXYZ Road, Hanoi, Vietnam
            </div>
            <div>
              +61 4 3519 9907
            </div>
          </div>

          <div className='col-12 col-lg-8 pe-md-4'>
            <Form>
              <div className='row'>
                <div className='col-12 col-lg-6 py-2'>
                  <input className='form-control' type='text' placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className='col-12 col-lg-6 py-2'>
                  <input className='form-control' type='text' placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className='row py-2'>
                <div className='col-12 col-lg-6 py-2'>
                  <Form.Label className="me-2">Date: </Form.Label>
                  <DatePicker selected={date} onChange={(value: Date) => setDate(value)} />
                </div>
                <div className='col-12 col-lg-6 py-2'>
                  <select value={time} onChange={e => setTime(e.target.value)}>
                    {
                      timeOptions.map(opt => (
                        <option value={opt}>{opt}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className='col-12 py-2'>
                <Form.Control as="textarea" rows={4} placeholder="Your message" className="fluid"/>
              </div>

            </Form>
          </div>
        </div>
      </Container>
    </div>

  )
}
