import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Container } from 'react-bootstrap';
import '../styles/css/main.css'


export function Menu() {
  interface Drink {
    name: string,
    description: string,
    price: number,
    img_link: string,
    type: string
  }

  interface Dessert {
    name: string,
    description: string,
    price: number,
    img_link: string
  }
  enum Category {
    Drinks,
    Dessert
  }
  const [drinks, setDrinks] = useState<Drink[]>([])
  const [dessert, setDessert] = useState<Dessert[]>([])

  const [showing, setShowing] = useState<Category>(Category.Drinks)


  useEffect(() => {
    const fetchDrinks = async() => {
      axios
      .get("http://localhost:3000/drinks")
      .then((res: AxiosResponse) => {
        setDrinks(res.data)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }
    fetchDrinks()
    const fetchDessert = async() => {
      axios
      .get("http://localhost:3000/dessert")
      .then((res: AxiosResponse) => {
        setDessert(res.data)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }
    fetchDessert()
  }, [])

  let drinksColor = '#91913B'
  let dessertColor = 'black'
  let list
  if (showing == Category.Dessert) {
    dessertColor = '#91913B'
    drinksColor = 'black'
    list = dessert.map((x) => (
      <div className="col-12 fs-5 text-center">
        {x.name}
      </div>
    ))
  } else {
    drinksColor = '#91913B'
    dessertColor = 'black'
    list = drinks.map((drink) => (

      <div className="col-12 fs-5 text-center">
        {drink.name}
      </div>
    ))
  }




  return (
    <>
      <div className='section justify-content-center w-100'>
        <Container className="px-lg-5">
          <div className='row text-center'>
            <div className='col-12 pt-5 font-size-2 primary-text'>
              Menu
            </div>
          </div>

          <div className="row justify-content-center">
            <div className='col-12 col-md-8 col-lg-6 col-xl-4 justify-content-center row'>
              <div className="col-6 fs-3 text-center" id="drinks" onClick={()=>setShowing(Category.Drinks)} style={{color: drinksColor}}>
                Drinks
              </div>
              <div className="col-6 fs-3 text-center" id="dessert" onClick={()=>setShowing(Category.Dessert)} style={{color: dessertColor}}>
                Dessert
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className='section justify-content-center w-100 pt-3 pb-5'>
        <Container className="px-lg-5 justify-content-center">
          {list}
        </Container>
      </div>

    </>
  )
}
