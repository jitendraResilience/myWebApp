import  Express  from "express"

const userRouter=Express.Router()

userRouter.route('/register').post(userRegisteration)
userRouter.route('/login').get(userlogin)
userRouter.route('/update').post(userUpdate)