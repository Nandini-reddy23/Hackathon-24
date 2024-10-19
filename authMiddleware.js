const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ error: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.student = decoded.id;
    next();
  } catch (e) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = authMiddleware;