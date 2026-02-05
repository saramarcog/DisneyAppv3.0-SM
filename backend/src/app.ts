import express from "express";
import cors from "cors"; // <--- 1. Importa esto
import type { Db } from "./db.js";
import { createMovieRouter } from "./movies/movies.routes.js";

export function createApp(db: Db) {
    const app = express();

    app.use(cors()); // <--- 2. ¡MUY IMPORTANTE! Añade esta línea aquí
    app.use(express.json());

    // Ruta de salud que usa tu script.js
    app.get('/health', (_req, res) => {
        res.json({ status: 'ok' });
    });

    app.use("/api/movies", createMovieRouter(db));

    return app;
}