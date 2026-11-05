import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Obtener variables de entorno para la conexión
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

// Configuración de la conexión a la base de datos
/**
 * Instancia de Sequelize para la conexión a MySQL
 * @param {string} database - Nombre de la base de datos
 * @param {string} username - Usuario de la base de datos
 * @param {string} password - Contraseña del usuario
 * @param {Object} options - Opciones adicionales de configuración
 */
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST, // Dirección del servidor de base de datos
  port: DB_PORT, // Puerto del servidor de base de datos
  dialect: "mysql", // Tipo de base de datos a utilizar
  logging: false, // Desactiva los logs de consultas SQL en consola
});


export { sequelize };