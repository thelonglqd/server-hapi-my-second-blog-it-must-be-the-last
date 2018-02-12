import express from 'express';
import { User } from '../models';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  User.findAll({ include: ['Posts', 'Groups'] })
    .then(users => res.send(users));
});

module.exports = router;
