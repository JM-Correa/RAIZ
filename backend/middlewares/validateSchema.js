// middlewares/validateSchema.js
export const validateSchema = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,   // reporta todos los errores, no solo el primero
    stripUnknown: true,  // elimina campos que no están en el schema
  });

  if (error) {
    return res.status(400).json({
      error: error.details.map((d) => d.message).join(", "),
    });
  }

  req.body = value; // body ya limpio y validado
  next();
};