// Si ninguna ruta responde, devuelve 404 en JSON
export function notFound(req, res) {
  res.status(404).json({ error: 'Ruta no encontrada' });
}

// Un solo lugar para manejar errores inesperados
export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
}
