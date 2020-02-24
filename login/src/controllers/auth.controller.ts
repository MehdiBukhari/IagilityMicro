import { Request, Response } from 'express';
import User, {IUser} from '../models/User';
import jwt from 'jsonwebtoken';


export const signup = async (req: Request, res: Response) => {

    //saving a new user
    
const user: IUser = new User ({

    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    

});

user.password= await user.encryptPassword(user.password);

const savedUser = await user.save();


res.send('user saved');

};

export const signin = async (req: Request, res: Response) => {
    
   const user= await User.findOne({email: req.body.email});
   if(!user) return res.status(400).json('email or password is wrong');

   const correctPassword: boolean= await user.validatePassword(req.body.password);
   if(!correctPassword) return res.status(400).json('invalid password');

    // Create a Token
    
    const token: string = jwt.sign({ _id: user._id }, process.env['TOKEN_SECRET'] || '');
    res.header('auth-token', token).json(token);

};


export const profile = async (req: Request, res: Response) => {
 
   const user = await User.findById(req.userId)

   if(!user) return res.status(404).json('user not found');

    res.json(user);

    

};