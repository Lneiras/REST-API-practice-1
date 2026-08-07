
import express from "express";
import { PORT } from "./config.js";
import  userRoutes  from "./routes/users.routes.js";

// variables de entorno
import 'dotenv/config';

const app = express();

app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});