import { Container } from "react-bootstrap"


export function BookingSuccess() {
  return (
    <>
      <div className='section justify-content-center w-100'>
        <Container className="px-lg-5">
          <div className='col-12 pt-5 font-size-2 primary-text text-center'>
            Booking Success!!!
          </div>
          <div className='col-12 ps-4 pt-3 text-center fs-3'>
            Please check your email for booking confirmation.
          </div>
        </Container>
      </div>
    </>
  )
}
