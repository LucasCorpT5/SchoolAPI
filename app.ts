import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/home', homeRoutes);

export default app;
