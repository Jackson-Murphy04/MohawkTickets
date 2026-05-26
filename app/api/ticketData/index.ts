//import prisma from '../../../prisma.config';
//const { PrismaClient } = require('@prisma/client');
import { NextApiRequest, NextApiResponse } from 'next';
//const prisma = new PrismaClient();
import prisma from '../../lib/prisma';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const tickets = await prisma.ticket.findMany();
        console.log('Fetched tickets:', tickets);
        return res.status(200).json(tickets);
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}