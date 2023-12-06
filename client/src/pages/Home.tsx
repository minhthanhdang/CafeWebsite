import { Container, Image } from "react-bootstrap";


export function Home() {
  return (
    <>
      {/* MAIN SECTION */}
      <div className='section justify-content-center w-100'>
        <Container className='justify-content-center'>

          <div className='row'>
            <div className='col-12 pt-4 page-title d-flex justify-content-center'>Zen Cafe</div>
          </div>
          <div className="row">
            <div className='col-12 px-5 img-scroll'>
              <Image src='../../assets/Images/Homepage-img1.jpeg' className='d-block mw-75' fluid/>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 fs-1 pt-5 d-flex justify-content-center text-uppercase color-complementary'>Welcome to</div>
          </div>
          <div className='row'>
            <div className='col-12 fs-1 d-flex justify-content-center text-uppercase color-complementary' style={{lineHeight: '10px'}}>our Vietnamese Bamboo Cafe</div>
          </div>
          <div className='row'>
            <a className='col-12 fs-2 pt-4 d-flex justify-content-center text-uppercase reservation-link'>Make a reservation</a>
          </div>
        </Container>
      </div>


      {/* INTRODUCTION SECTION */}
      <div className='section justify-content-center w-100 pb-5'>
        <Container className='justify-content-center pb-5'>
          <div className="row ">
            <div className='col-12 px-5 img-scroll d-flex justify-content-center' >
              <Image src='../../assets/SVG/logo.svg' className='d-block ' style={{width:'90px'}}/>
            </div>
          </div>
          <div className='row align-items-center py-5'>
            <div className='col-6 fs-4 pe-5 pt-5 d-flex flex-wrap justify-content-center color-complementary'>
              We are known for our nourshing, energizing and revitalizing drinks, inspired by our love toward a healthy balance life.
              <br />
              The combination of ancient medicine recipes and modern coffee techniques results in a multi-sensory experience that offers the very special tastes of tradition Vietnamese remedy, intertwine with bursting coffee flavors.
            </div>
            <div className='col-6 fs-4 pe-5 pt-5 d-flex flex-wrap justify-content-center color-complementary'>
              <Image src='../../assets/Images/Image2.jpg' className='d-block ' style={{width:'80%'}}/>
            </div>
          </div>
        </Container>
      </div>


      {/* SIGNATURE DRINKS SECTION */}
      <div className='section justify-content-center w-100 py-5 background-complementary'>
        <Container className=''>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center fs-1 py-4 text-white'>
              Our signature drinks
            </div>
          </div>

          <div className='d-flex justify-content-center row py-5'>
            <Image src='../../assets/SVG/Drink1.svg' className='col-12 col-md-4 mx-5 my-5' style={{width:'300px'}}/>
            <Image src='../../assets/SVG/Drink2.svg' className='col-12 col-md-4 mx-5 my-5' style={{width:'300px'}}/>
            <Image src='../../assets/SVG/Drink3.svg' className='col-12 col-md-4 mx-5 my-5' style={{width:'300px'}}/>
          </div>
        </Container>
      </div>

      <div className='section justify-content-center w-100 py-5 background-complementary'>
        <Container className='pt-5'>

          <div className='row'>
            <div className='col-12 col-lg-6 fs-4 pe-5 pt-5 d-flex flex-wrap justify-content-center color-complementary'>
              <Image src='../../assets/Images/MenuImage.jpg' className='d-block ' style={{width:'80%'}}/>
            </div>
            <Container className='col-12 col-lg-6 justify-content-center py-4 '>
              <div className='col-12 fs-1 text-white d-flex justify-content-center py-5'>
                Menu
              </div>

              <div className='col-12 fs-4 text-white'>
                Blending experimental concepts with traditional Vietnamese methods, the menu strikes a harmonious chord
                between daring and timeless dishes, consistently adhering to the philosophy of utilizing locally sourced
                ingredients and embracing simplicity.
              </div>
            </Container>
          </div>
        </Container>

      </div>

      {/* FOOTER */}
      <div className='section justify-content-center w-100 pb-5'>
        <Container>
          <div className='row'>
            <div className='col-4'>
              <div className='fs-4 mb-3'>
                Find us on
              </div>
              <div>
                <Image src='../../assets/SVG/facebook.svg' className='col-2 mx-1' style={{width:'35px'}}/>
                <Image src='../../assets/SVG/instagram.svg' className='col-2 mx-1' style={{width:'35px'}}/>
                <Image src='../../assets/SVG/twitter-x.svg' className='col-2 mx-1' style={{width:'35px'}}/>
              </div>
            </div>

            <div className='col-4'>
              <div className='fs-4 mb-3'>
                Contact with us
              </div>
              <div className='fs-5'>
                zencafe@gmail.com
              </div>
            </div>
            <div className='col-4'>
              <div className='fs-4 mb-3'>
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
