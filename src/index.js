import express from 'express';
import { PrismaClient } from '@prisma/client';
import { router as productRoutes } from './routes/productRoutes.js'; // Importando o objeto router

const app = express();
const prisma = new PrismaClient();

app.use(express.json())
app.use('/products', productRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})