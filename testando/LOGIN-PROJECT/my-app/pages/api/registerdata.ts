import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql'

export default function handler(
    res: NextApiResponse,
    req: NextApiRequest
){

    if(req.method === "POST"){
        res.status(200).json({IsCreted: true})
    }
}