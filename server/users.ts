"use server";

import { auth } from "../lib/auth";

export const signIn = async (email:string,password:string) => {
    try{

        await auth.api.signInEmail({
            body: {
                email,
                password
            }
        })
        return{
            success:true,
            message:"Signed in successfully"
        }
    } catch(error){
        const e = error as Error
        return{
            success:false,
            message:e.message||"An unknown error occured"
        }
    }
}

export const signUp = async (userData: {username: string, email: string, password: string}) => {
    try{
        await auth.api.signUpEmail({
            body: {
                email: userData.email,
                password: userData.password,
                name: userData.username
            }
        })
        console.log(userData.username)
        console.log(userData.email)
        return{
            success:true,
            message:"Signed up successfully"
        }

    } catch(error){
        const e = error as Error
        return{
            success:false,
            message:e.message||"An unknown error occured"
        }
    }
}

