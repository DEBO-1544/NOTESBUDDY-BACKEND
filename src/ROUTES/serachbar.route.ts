import {Router} from "express"
import { SerachBar} from "../CONTROLLER/serach.controller.ts"
const route=Router()

route.post("/",SerachBar)
export default route 