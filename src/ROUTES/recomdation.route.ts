import {Router} from "express"
import {GetRecomdation} from "../CONTROLLER/recomdation.controller.ts"



const route=Router()
route.get("/:userid",GetRecomdation)
export default route