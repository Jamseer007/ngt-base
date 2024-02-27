// // pages/api/createUser.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from '@/lib/prisma'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { name, email } = req.body;
//       const newUser = await prisma.user.create({
//         data: {
//           name,
//           email        },
//       });
//       res.status(201).json(newUser);
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ message: 'Error creating user' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  
 
  return Response.json({ id })
}