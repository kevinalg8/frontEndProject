import { Router } from "express"

const loginRouter = Router()

loginRouter.get("/google", (req,res)=> {
    const id = req.user.id,
        name = req.user.displayName,
        email = req.user.emails[0].value;
    
        res.render("backoffice",{nombre:name});
})
export {loginRouter}