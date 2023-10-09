export const createError = (error, status, message) => {
  const err = new Error();
  err.message = message || error.message || 'Server error';
  err.status = status || 500;
  err.success = false;
  err.data = null;
  return error;
};
