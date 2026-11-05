// routes/tasks.routes.js
import { Router } from "express";
import * as ctrl from "../controllers/task.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getOne);
router.post("/", validateSchema(createTaskSchema), ctrl.create);
router.put("/:id", validateSchema(updateTaskSchema), ctrl.update);
router.delete("/:id", ctrl.remove);

export default router;