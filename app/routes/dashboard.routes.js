/*
Dashboar y luego autenticar 
*/
import { Router } from "express";

const dash = Router()

dash.get("/Inico", (req,res)=>{
    res.render("dash")
})

export default dash