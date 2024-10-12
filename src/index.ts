import express, { Request, Response } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Teste' });
});

app.listen(5000, () => console.log('Server is running on port 5000'));
