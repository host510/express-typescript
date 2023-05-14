import pkg from 'pg';
const { Pool } = pkg;
import { Request, Response } from 'express';
import { env } from 'process';
import express = require('express');
const app = express();

const port = env.port || 3000;

const router = express.Router();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

pool.query('SELECT NOW()', (err: Error, res): void => {
  console.log(err, res);
  pool.end();
});

router.get('/', (_req: Request, res: Response): void => {
  res.status(200).json('Hello World @@@@@');
});

router.get('/*', (_req: Request, res: Response): void => {
  res.status(404).json({
    error: 'Запрос не может быть обработан, маршрут не найден',
  });
});

app.use('/', router);

app.listen(3000, (): void => {
  console.log(`Running port ${port}`);
});
