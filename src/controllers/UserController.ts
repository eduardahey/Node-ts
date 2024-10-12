import { Request, Response } from 'express';
import {UserService} from '../services/UserService'


export class UserController{
    userService: UserService

    constructor(
        userService = new UserService
    ){
        this.userService = userService
    }
    createUser = (req: Request, res: Response) => {
        const user = req.body

        //Se o nome de usuário for nulo ou indefinido(!!user.name)
        if(!user.name){
            return res.status(400).json({message: 'Bad request: Invalid name.'})
        }

        if(!user.email){
            return res.status(400).json({message: 'Bad request: Invalid email.'})
        }

        this.userService.createUser(user.name,user.email)
        res.status(201).json({message: 'User created.'})
    }

    getAllUsers = (req: Request, res: Response) => {
        const users = this.userService.getAllUsers()
        return res.status(200).json(users)
    }

    deleteUser = (req: Request, res: Response) => {
        const user = req.body

        if(!user.name){
            return res.status(400).json({message: 'Bad request: Invalid name.'})
        }

        this.userService.deleteUser(user.name,user.email)
        res.status(200).json({message: 'User deleted.'})
    }
}