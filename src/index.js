//importing base project envs and packages
const PORT = process.env.PORT || 3000

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();


//Routing
router.get('/', async (ctx) => {
    ctx.body = 'Working~!';
    ctx.status = 200;
})

router.get('/test', async ctx => {
    ctx.body = 'Test Working!'
})

router.post('/user', async (ctx, next) => {
    ctx.body = ctx.req.body;
    ctx.body = ctx.res.body;
    ctx.response.message = 'hello there!'
})

const server = app.listen(PORT);

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(bodyParser());

module.exports = server;