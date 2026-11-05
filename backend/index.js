import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { sequelize } from './db/config.js';
import routerApi from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

routerApi(app);

app.use((req, res) => {
  res.status(404).json({ error: 'Recurso no encontrado' });
});

app.use(errorHandler);

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida');
    await sequelize.sync(); // quítalo si te dan las tablas ya creadas
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  } catch (error) {
    console.error('No se pudo iniciar:', error.message);
    process.exit(1);
  }
}

start();