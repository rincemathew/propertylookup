import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of users');
});


export default router;