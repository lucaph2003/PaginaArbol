import express from 'express';
import indexRoutes from './routes/index.routes.js'
import cabaniasRoutes from './routes/cabanias.routes.js'
import ovinosRoutes from './routes/ovinos.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use(indexRoutes);
app.use('/api',cabaniasRoutes);
app.use('/api',ovinosRoutes);
app.use('/api',usuariosRoutes);

app.use((req,res,next) => {
    res.status(404).json({
        message: "endpoint not found"
    })
})

export default app;