import { IUser } from '@/app/types/user';
import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client/wasm';

/**
 * Find all the users.
 * 
 * @returns 
 */
export async function findAll(): Promise<User[]> {  // Function to fetch all posts from the database.
    return await prisma.user.findMany({
        orderBy: [
            {
                name: 'asc',
            }
        ],
    })
}


/**
 * Find user by the given id.
 * 
 * @param id 
 * @returns 
 */
export async function findById(id: number): Promise<User | null> {  
    const user = await prisma.user.findFirst({
        where: 
            {
                id,
            }
    })
    if (!user) {
       // TODO: handle exception here
    }

    return user;
}

/**
 * Find user email by the given id.
 * 
 * @param id 
 * @returns 
 */
export async function findEmailById(id: number): Promise<any | null> {  
    const user = await prisma.user.findFirst({
        where: 
            {
                id,
            },
        select: {
            email: true
        }
    })
}

/**
 * Create a new user.
 * 
 * @param user 
 * @returns 
 */
export async function create(user: IUser)  {
    return await prisma.user.create({
        data: {
          ...user
        },
      })
}

/**
 * Update an existing user.
 * 
 * @param user 
 */
export async function update(user: User) {
    return await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          ...user
        },
      })
}