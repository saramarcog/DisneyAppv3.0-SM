import { Router } from "express";
import type { Db } from "../db.js";

export function createMovieRouter(db: Db) {
    const r = Router();

    // GET /api/movies
    r.get("/", (_req, res) => {
        db.all(
            "SELECT * FROM movies",
            [],
            (err, rows) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ ok: false, error: "database_error" });
                    return;
                }
                res.json({ ok: true, movies: rows });
            }
        );
    });

    return r;
}
/*
// pseudocódigo interno de sqlite3
function all(sql, params, callback) {
ejecutarSQL(sql, params, (error, result) => {
callback(error, result);
});
}

*/