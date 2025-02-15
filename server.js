import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from "./routes/index.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import { dbConnection } from './utils/dbConnection.js';

config();
const app = express();

app.use(cors({
    origin: [`${process.env.FRONTEND_PORT}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
app.use(errorMiddleware);


app.listen(process.env.PORT, () => console.log(`Backend started at ${process.env.PORT}`));
dbConnection();