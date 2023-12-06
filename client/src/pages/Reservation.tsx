import { Container, Form } from "react-bootstrap";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export function Reservation() {
  const [date, setDate] = useState(new Date());

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

          <div className='col-12 col-md-8 pe-md-4'>
            <Form>
              <div className='row'>
                <div className='col-6 py-2'>
                  <Form.Control type='text' placeholder="Your name"/>
                </div>
                <div className='col-6 py-2'>
                  <Form.Control type='text' placeholder="Your email"/>
                </div>
              </div>
              <div className='col-12 py-2'>
                <DatePicker selected={date} onChange={(value: Date) => setDate(value)} />
              </div>
              <div className='col-12 py-2'>
                <Form.Control as="textarea" rows={4} placeholder="Your message" className=""/>
              </div>

            </Form>
          </div>
        </div>
      </Container>
    </div>

  )
}
