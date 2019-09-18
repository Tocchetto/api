import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Guilherme Tocchetto',
    email: 'tocchettoo@gmail.com',
    password_hash: 'senha_dificil',
  });

  return res.json(user);
});

export default routes;
