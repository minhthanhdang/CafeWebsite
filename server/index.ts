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

app.get('/reservations', async (req: Request, res: Response) => {
  try {
    const allReservations = await pool.query("SELECT * FROM reservation");
    res.json(allReservations.rows);
  } catch (err) {
    console.error(getErrorMessage(error))
  }
});

app.get('/dine_in_sessions', async(req: Request, res: Response) => {
  try {
    const allDineInSessions = await pool.query("SELECT * FROM dine_in_session");
    res.json(allDineInSessions.rows)
  } catch (err) {
    console.error(getErrorMessage(error))
  }
})

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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


