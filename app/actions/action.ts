'use server'

import { prisma } from "@/lib/prisma";
import { IUser } from "../types/user";
import { z } from 'zod';
import { RedirectType, redirect } from "next/navigation";
import { userSchema } from "@/util/zod/userSchema";

export async function createUser(  prevState: {
 

  message: string
}, formData: FormData) {

  const data = userSchema.parse({
    name: formData.get('name'),
    email: formData.get('email')
  })


  try {
      const newUser = await prisma.user.create({
        data: { ...data  },
      });
      if(newUser) {
        console.log("New user", newUser);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
    return redirect("/admin/users");

  };