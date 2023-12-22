import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export function Reservation() {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [timeOptions, setTimeOptions] = useState([]);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const navigate = useNavigate();

  interface Session {
    start_time: string;
  }

  // Change sessions each time users choose a different date
  useEffect(() => {

    const dayOfWeek = daysOfWeek[date.getDay()]


    const fetchData = async () => {
      axios
      .get("http://localhost:3000/sessions_on/" + dayOfWeek)
      .then((res) => {
        setTimeOptions(res.data.map((x: Session) => x.start_time))
      })
      .catch((err) => {
        console.error(err.message)
      })
    };
    fetchData()
  }, [date])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = document.getElementById("reservation-form") as HTMLFormElement;
    if (form) {
      const form_data = new FormData(form);
      interface FormPair {
        [index: string | number]: FormDataEntryValue;
      }
      var object: FormPair = {};
        form_data.forEach(function(value, key){
            object[key] = value;
        });
      var json = JSON.stringify(object);
      console.log(json)
      try {
        axios
          .post("http://localhost:3000/book/", json, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then((res: AxiosResponse) => {
            console.log(res)

            if(res.data.success) {
              navigate('/bookingsuccess')
            }
          })
      } catch {

      }
    }
  }


  // !!!!!!!!!!!!!!!!!!!!          CONTENT          !!!!!!!!!!!!!!!!!!!!
  return (
    <>
    <div className='section justify-content-center w-100 pb-5'>
      <Container className="px-lg-5">
        <div className='row text-center'>
          <div className='col-12 pt-5 font-size-2 primary-text'>
            Book your Vietnamese
          </div>
          <div className='col-12 pb-5 font-size-2 primary-text'>
            Experience
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
            <form id="reservation-form" onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-12 col-lg-6 py-2'>
                  <input className='form-control' type='text' placeholder="Your name" value={name} name="name" onChange={e => setName(e.target.value)} />
                </div>
                <div className='col-12 col-lg-6 py-2'>
                  <input className='form-control' type='text' placeholder="Your email" value={email} name="email" onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className='row py-2'>
                <div className='col-12 col-lg-6 py-2'>
                  <Form.Label className="me-2 ">Date: </Form.Label>
                  <DatePicker className="form-control fs-5" name="date" selected={date} onChange={(value: Date) => setDate(value)} />
                </div>
                <div className='col-12 col-lg-6 py-2'>
                  <select value={time} name="time" onChange={e => setTime(e.target.value)} className='form-control fs-5'>
                    {
                      timeOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div className='col-12 py-2'>
                <label className="d-inline">Table for:</label>
                <input name='amount' type='number' className='form-control fs-5'/>
              </div>

              <div className='col-12 py-2'>
                <Form.Control as="textarea" name="request" rows={4} placeholder="Your message" className="fluid" />
              </div>
              <div className='col-12 py-2'>
                <Button variant="primary" type="submit" className='background-primary fw-bold' >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>


    </>
  )
}
