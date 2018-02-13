import express from 'express';
import userRoutes from './users.route';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => {
  res.send('OK');
});

router.use('/users', userRoutes);

module.exports = router;

