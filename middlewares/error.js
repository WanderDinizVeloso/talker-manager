const error = async (err, _req, res, _next) => {
  try {
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    }

    return res.status(500).json({ message: err.message });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = error;
