import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'coisa@coisa.com',
        password: '1234',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'javascript', experience: 100 },
        ],
    });

    return response.json({ message: 'Hello TypeScripr' });
};