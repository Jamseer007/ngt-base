'use server'

import { IUser } from "@/app/types/user";
import { userSchema } from "@/util/zod/userSchema";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function saveUser(user: FormData) {
    const data = userSchema.parse({
        name: user.get('name'),
        email: user.get('email'),
      })

      let userResponse = null;
      try {
        userResponse = await prisma.user.create({
          data: { ...data  },
        });
        if(userResponse) {
            console.log("New user", userResponse);
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
      // Redirecting to the list page
      redirect("/admin/users");
}