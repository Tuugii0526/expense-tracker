"use server"

import bcrypt from 'bcrypt'
import {neon } from "@neondatabase/serverless"
const sql= neon(`${process.env.DATABASE_URL}`)
export async function signUp({name,email,password}){
   try {
      
     const user=await sql`
     SELECT * FROM users
     WHERE email=${email}`
    if(user.length)
    {
        return {
            success:false,
            message:"You already have an account"
        }
    }
    const hashedPassword= await bcrypt.hash(password,10);
     await sql`
     INSERT INTO users(name,email,password)
     VALUES (${name},${email},${hashedPassword})
     `
    return {
       success:true,
       message:'Successfully signed up'
    }
   } catch (error) {
    return {
        success:false,
        message:`${error}`,
    }
   }
}
export async function logIn({email,password}){
     try {
        const user= await sql`
        SELECT * 
        FROM users
        WHERE email=${email} `
        if(!user.length)
            {
               return {
                success:false,
                type:'no-account',
                message:'You dont have an account'
               }
            }
        const fetchedPassword=user[0].password
        const passwordsMatch= await bcrypt.compare(password,fetchedPassword)
      if(passwordsMatch){
         return {
            success:true,
            message:'You have successfully logged in'
         }
      }
      else {
        return {
            success:false,
            type:'password-no-match',
            message:'Your password is incorrect'
        }
      }
     } catch (error) {
        return {
            success:false,
            type:'server-error',
            message:`${error}`
        }
     }
}