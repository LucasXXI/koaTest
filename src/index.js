//importing base project envs and packages
const PORT = process.env.PORT || 3000

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');

const app = new Koa();
const router = new Router();

const UserController = require('./controllers/UserController');


//Routing
router.get('/', async (ctx) => {
    ctx.body = 'Working~!';
    ctx.status = 200;
})

router.get('/test', async ctx => {
    ctx.body = 'Test Working!'
})

router.post('/users', UserController.store);

router.get('/users/currentuser', UserController.currentUser);

const server = app.listen(PORT)


app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(bodyParser())
    .use(json())

module.exports = server;