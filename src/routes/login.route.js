import e from "express";
import setDetail from "../controllers/login.controller.js";


const lRoute = e.Router();


lRoute.post('/login',setDetail);

export default lRoute;