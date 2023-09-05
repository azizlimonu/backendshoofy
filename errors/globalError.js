const { secret } = require('../config/secret');
const ApiError = require('./apiError');
const handleCastError = require('./castError');
const handleValidationError = require('./validationError');

const globalErrorHandler = (error, req, res, next) => {
  // Default values
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorMessages = [];

  // Handle ValidationError
  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  // Handle CastError
  else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  // Handle ApiError
  else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
        {
          path: '',
          message: error?.message,
        },
      ]
      : [];
  }
  // Handle other Error instances
  else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
        {
          path: '',
          message: error?.message,
        },
      ]
      : [];
  }

  // Send response
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: secret.env !== 'production' ? error?.stack : undefined,
  });
};

module.exports = globalErrorHandler;