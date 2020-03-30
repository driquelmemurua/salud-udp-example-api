import express from 'express';
import data from './data';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/data', (req:any, res:any) => res.json(data));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))