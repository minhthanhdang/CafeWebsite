import { Container, Image } from 'react-bootstrap'


export function AppFooter() {
  return (
    <>
      <div className='section justify-content-center w-100 pb-5 pt-0 border-top border-dark'>
        <Container>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className='fs-4 mt-3 primary-text'>
                Find us on
              </div>
              <div>
                <Image src='../../assets/SVG/facebook.svg' className='col-2 mx-1' style={{width:'35px'}}/>
                <Image src='../../assets/SVG/instagram.svg' className='col-2 mx-1' style={{width:'35px'}}/>
                <Image src='../../assets/SVG/twitter-x.svg' className='col-2 mx-1' style={{width:'35px'}}/>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4'>
              <div className='fs-4 mt-3 primary-text'>
                Contact with us
              </div>
              <div className='fs-5'>
                zencafe@gmail.com
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className='fs-4 mt-3 primary-text'>
                Contact with us
              </div>
              <div className='fs-5'>
                123 ABCXYZ Road, Hanoi, Vietnam
              </div>
            </div>
          </div>
        </Container>

      </div>
    </>
  )
}
