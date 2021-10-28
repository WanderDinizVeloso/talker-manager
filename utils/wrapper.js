const wrapper = (handler) => async (req, res, next) => {
    try {
      return handler(req, res, next);
    } catch (error) {
      return next(error);
    }
};

module.exports = wrapper;
