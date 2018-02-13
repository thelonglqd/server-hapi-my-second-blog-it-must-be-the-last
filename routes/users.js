import express from 'express';

import { User } from '../models';
import log from '../logger/';

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const { offset, limit } = req.query;
    const users = await User.listUsers(offset, limit);
    res.json(users);
  } catch (error) {
    log.error(error);
    next(error);
  }
});

/* GET user by id */
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.readUser(userId);
    res.json(user);
  } catch (error) {
    log.error(error);
    res.json(error);
  }
});

/* POST create a user */
router.post('/', async (req, res) => {
  try {
    const user = req.body;
    log.debug('user: ', user);
    const createdUser = await User.createUser(user);
    res.json(createdUser);
  } catch (error) {
    log.error(error);
    res.json(error);
  }
});

/* PATH update a user */
router.patch('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const changes = req.body;
    const updating = await User.readUser(userId);
    const updated = await User.updateUser(updating, changes);
    delete updated.password;
    log.debug('updated user: ', updated);
    res.json(updated);
  } catch (error) {
    log.error(error);
    res.json(error);
  }
});

module.exports = router;
