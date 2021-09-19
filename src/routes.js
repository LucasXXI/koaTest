
import Router from 'koa-router';
import bodyParser  from 'koa-bodyparser';

const router = new Router();
const parser = new bodyParser();

import { getUsers, getUser, createUser, deleteUser, updateUser }  from "./controllers/UserController.js"

router.use(parser);

//Routing
router.get('/users', getUsers )

router.get('/users/:id', getUser );

router.post('/users', createUser );

router.delete('/users/:id', deleteUser );

router.patch('/users/:id', updateUser );

export default router;