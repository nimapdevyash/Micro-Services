function wrapper(fn) {
  return async function (...args) {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      return args[1].status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}

module.exports = wrapper;
