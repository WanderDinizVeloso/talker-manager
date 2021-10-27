const wrapper = (handler) => async (req, res, next) => {
    try {
      handler(req, res, next);
      next();
    } catch (error) {
      next(error);
    }
};

module.exports = wrapper;
