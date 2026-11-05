// controllers/tasks.controller.js
import { Op } from "sequelize";
import { Task } from "../db/models/index.js";

// GET /api/tasks?search=texto&estatus=1
export const getAll = async (req, res, next) => {
  try {
    const where = {};

    if (req.query.estatus !== undefined) {
      where.estatus = Number(req.query.estatus);
    }
    if (req.query.search) {
      where.nombre = { [Op.like]: `%${req.query.search}%` };
    }

    const tasks = await Task.findAll({
      where,
      order: [["idtask", "DESC"]], // no hay createdAt, se ordena por id
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// GET /api/tasks/:id
export const getOne = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// POST /api/tasks  (el body ya viene validado por Joi)
export const create = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// PUT /api/tasks/:id  (el body ya viene validado por Joi)
export const update = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

    await task.update(req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/tasks/:id
export const remove = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

    await task.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};