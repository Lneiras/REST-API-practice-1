

import {Router} from "express";
import pool from "../db.js";

const router = Router();


/*
aqui realizamos las rutas para los usuarios, en este caso se hace un CRUD de usuarios, es decir, crear, leer, actualizar y eliminar usuarios

con el GET para /users agregamos el async para que se ejecute de manera asincrona y poder hacer la consulta a la base de datos, en este caso se hace un SELECT * FROM users para obtener todos los usuarios, luego se hace un console.log de los usuarios obtenidos y finalmente se envia la respuesta en formato JSON con res.json(rows)
*/
router.get("/users", async(req, res) => {
    const {rows} = await pool.query("SELECT * FROM users");
    console.log(rows);
    res.json(rows);
} ); 

router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.send( `User details for ID: ${id}` );
} ); 

router.post("/users", (req, res) => {
    res.send( "User created");
} ); 

router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    res.send( `User updated for ID: ${id}` );
} ); 

router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    res.send( `User deleted for ID: ${id}` );
} ); 


export default router;