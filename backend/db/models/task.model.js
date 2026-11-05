// Este archivo define la tabla "task".
import { DataTypes } from "sequelize";
import { sequelize } from "../config.js";

export const Task = sequelize.define(
	"Task",
	{
		// Llave primaria.
		idtask: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// Datos de la tarea.
		nombre: {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
		detalle: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		estatus: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0,
		},
	},
	{
		// Nombre real de la tabla en la base de datos.
		tableName: "task",
		// No hay createdAt / updatedAt en esta tabla.
		timestamps: false,
	}
);
