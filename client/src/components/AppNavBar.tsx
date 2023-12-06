import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/css/main.css'

export function AppNavBar() {
  return (
    <>
      <Navbar className='position-fixed w-100 shadow-sm' id='app-navbar'>
        <Container className='align-items-center justify-content-center mx-auto p-0 w-100 d-flex' fluid>
          <Container id='nav-wrapper-left' className='justify-content-end d-none d-md-flex flex-wrap w-100'>
            <Nav className='mx-1 mx-md-2 mx-xl-5 fs-6 '>
              <Nav.Link href='/'>Menu</Nav.Link>
            </Nav>
            <Nav className='mx-1 mx-md-2 mx-xl-5 fs-6 '>
              <Nav.Link href='/'>Before you visit</Nav.Link>
            </Nav>
          </Container>


          <Navbar.Brand className='w-25 mx-auto px-auto'>
            <Link to='/' className='mx-auto navbar-brand d-flex'>
              <Image src="../../assets/SVG/logo.svg" className='mx-auto float-middle' id='logo'/>
            </Link>
          </Navbar.Brand>



          <Container id='nav-wrapper-right' className='d-none d-md-flex flex-wrap w-100 '>
            <Nav className='mx-5 fs-6 '>
              <Nav.Link href='/reservation'>Reservations</Nav.Link>
            </Nav>
            <Nav className='mx-5 fs-6 '>
              <Nav.Link href='/'>Events</Nav.Link>
            </Nav>
          </Container>



        </Container>
      </Navbar>
    </>
  )
}
