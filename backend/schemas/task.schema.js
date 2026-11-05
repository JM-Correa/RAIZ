// schemas/task.schema.js
import Joi from "joi";

export const createTaskSchema = Joi.object({
  nombre: Joi.string().trim().max(45).required(),
  detalle: Joi.string().trim().required(),
  estatus: Joi.number().valid(0, 1),
});

export const updateTaskSchema = Joi.object({
  nombre: Joi.string().trim().max(45),
  detalle: Joi.string().trim(),
  estatus: Joi.number().valid(0, 1),
}).min(1);