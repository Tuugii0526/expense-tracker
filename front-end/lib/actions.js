"use server";

import bcrypt from "bcrypt";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
export const sql = neon(`${process.env.DATABASE_URL}`);
export async function signUp({ name, email, password }) {
  try {
    const user = await sql`
     SELECT * FROM users
     WHERE email=${email}`;
    if (user.length) {
      return {
        success: false,
        message: "You already have an account",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await sql`
     INSERT INTO users(name,email,password)
     VALUES (${name},${email},${hashedPassword})
     `;
    return {
      success: true,
      message: "Successfully signed up",
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}
export async function logIn({ email, password }) {
  const cookieStore =  cookies()
  try {
    const user = await sql`
          SELECT * 
          FROM users
          WHERE email=${email} `;
    if (!user.length) {
      return {
        success: false,
        type: "no-account",
        message: "You dont have an account",
      };
    }
    const fetchedPassword = user[0].password;
    const passwordsMatch = await bcrypt.compare(password, fetchedPassword);
    if (passwordsMatch) {
      cookieStore.set('userId',user[0].id)
      return {
        success: true,
        id: user[0].id,
        message: "You have successfully logged in",
      };
    } else {
      return {
        success: false,
        type: "password-no-match",
        message: "Your password is incorrect",
      };
    }
  } catch (error) {
    return {
      success: false,
      type: "server-error",
      message: `${error}`,
    };
  }
}
export async function createCategory({ name, description, icon_color ,userId}) {
  try {
    const createdCategory = await sql`
   INSERT INTO categories(name,description,icon_color,user_id)
   VALUES (${name},${description},${icon_color},${userId})`;
   revalidatePath('/records')
   revalidatePath('/dashboard')
    return {
      success: true,
      createdCategory: createdCategory,
      message: "You have successfully created category.",
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}
export async function createRecord({
  amount,
  category_id,
  user_id,
  payee,
  transaction_type,
  description,
  created_at
}) {
  try {
    await sql`
  INSERT INTO  records(user_id,name,amount,transaction_type,description,category_id,created_at)
  VALUES (${user_id},${payee},${amount},${transaction_type},${description},${category_id},${created_at})`;
  revalidatePath('/records')
  revalidatePath('/dashboard')
    return {
      success: true,
      message: "You have successfully created a record.",
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}

