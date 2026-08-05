
import express from "express";
import { PORT } from "./config.js";
import  userRoutes  from "./routes/users.routes.js";

// conexion de la base de datos
import pool from './db.js'; 

// variables de entorno
import 'dotenv/config';

const app = express();

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});