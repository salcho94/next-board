// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

type Board = {
    _id?: string;
    boardData:{
        title : string;
        contents : string;
        regDate : Date;
        uptDate : Date;
        password :string;
        viewCnt:number;
        topYn :string;
        likes :number;
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db('owal');

    switch (req.method) {
        case 'GET':
            const board: User[] = await db.collection('board').find({}).toArray();
            res.status(200).json(board);
            break;
        case 'POST':
            const newBoard: Board = req.body;
            await db.collection('board').insertOne(newBoard);
            res.status(201).json({ message: 'User added successfully' });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}
