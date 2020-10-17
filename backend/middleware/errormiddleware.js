//middleware error handling for single product

const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//custom error middleware for postman use:)

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
