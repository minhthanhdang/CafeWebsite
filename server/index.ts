import express, { Express, Request, Response } from 'express';

const cors = require('cors')

const pool = require("./db")
import { error } from 'console';
const app: Express = express();
app.use(cors())
app.use(express.json())


// Error handling
function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}


// get all reservations
app.get('/reservations', async (req: Request, res: Response) => {
  try {
    const allReservations = await pool.query("SELECT * FROM reservation");
    res.json(allReservations.rows);
  } catch (err) {
    console.error(getErrorMessage(error))
  }
});


// get all dine in sessions
app.get('/dine_in_sessions', async(req: Request, res: Response) => {
  try {
    const allDineInSessions = await pool.query("SELECT * FROM dine_in_session");
    res.json(allDineInSessions.rows)
  } catch (err) {
    console.error(getErrorMessage(error))
  }
})


// get dine in sessions given day
app.get('/sessions_on/:day', async (req: Request, res: Response) => {
  try {
    const { day } = req.params;
    console.log(day)
    const sessions = await pool.query("SELECT start_time FROM dine_in_session WHERE day = '" + day +"';")
    res.json(sessions.rows);
  } catch (err){
    console.error(getErrorMessage(error))
  }
})


// book a reservation
app.post('/book/', async (req: Request, res: Response) => {

  const data = req.body
  function changeDateFormat(inputDate: String) {
    // Split the input date string into day, month, and year
    const [month, day, year] = inputDate.split('/');

    return `${year}-${month}-${day}`;
  }

  const formatedDate = changeDateFormat(data.date);

  try {
    console.log(`INSERT INTO reservation (name, email, guestAmount, date, time, request) VALUES ('${data.name}', '${data.email}', ${data.amount}, '${formatedDate}', '${data.time}', '${data.request}');`)
    await pool.query(`INSERT INTO reservation (name, email, guestAmount, date, time, request) VALUES ('${data.name}', '${data.email}', ${data.amount}, '${formatedDate}', '${data.time}', '${data.request}');`)
    res.json({'success': true})
  } catch (err){
    console.error('book query error' + getErrorMessage(error))
    res.json({'success': false})
  }
})


// !!!!!!!!!!         Get the drinks          !!!!!!!!!!!!!!
app.get('/drinks', async (req: Request, res: Response) => {
  try {
    const drinks = await pool.query("SELECT * FROM drink;")
    res.json(drinks.rows);
  } catch (err){
    console.error(getErrorMessage(error))
  }
})


// !!!!!!!!!!         Get the dessert          !!!!!!!!!!!!!!
app.get('/dessert', async (req: Request, res: Response) => {
  try {
    const dessert = await pool.query("SELECT * FROM dessert;")
    res.json(dessert.rows);
  } catch (err){
    console.error(getErrorMessage(error))
  }
})


// !!!!!!!!!!         Get the events          !!!!!!!!!!!!!!
app.get('/events', async (req: Request, res: Response) => {
  try {
    const dessert = await pool.query("SELECT * FROM event;")
    res.json(dessert.rows);
  } catch (err){
    console.error(getErrorMessage(error))
  }
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


