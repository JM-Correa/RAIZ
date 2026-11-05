// Este archivo conecta todas las rutas bajo /api.
import express from "express";
import taskRouter from "./task.routes.js";

const routerApi = (app) => {
	const router = express.Router();
	// Cualquier ruta que empiece con /api entra aqui.
	app.use("/api", router);

	// Cada router maneja su propio recurso.
	router.use("/tasks", taskRouter);
	
};

export default routerApi;
