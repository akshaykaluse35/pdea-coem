// middleware/authMiddleware.js
const auth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

const admin = (req, res, next) => {
  if (req.session.userRole !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

module.exports = { auth, admin };
