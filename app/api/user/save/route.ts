// // pages/api/user/save/route.ts

import { NextApiRequest, NextApiResponse } from "next"

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
    body: JSON.stringify(req.body),
  })
 
  const data = await response.json()
 
  return Response.json(data)
}