//importing base project envs and packages
const PORT = process.env.PORT || 3000

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const parser = new bodyParser();

router.use(parser)

let users = [
    {
        name: "Lucas",
        age: "19",
        email: "lucasleal2001@gmail.com"
    },
    {
        name: "Gabriel",
        age: "19",
        email: "gabrielXamex123@gmail.com"
    }
];

//Routing
router.get('/users', async (ctx) => {
    ctx.body = users;
    ctx.status = 200;

})

router.get('/users/:id', async (ctx) => {
    const { id } = ctx.params;
    console.log(id, users.lenght);

    try {
        if (users && id < users.length){
            ctx.body = users[id]
        }
        else {
            ctx.response.status = 400;
            ctx.body = { error: "Non existent Index" }
        }
    } catch (error) {
        ctx.response.status = 400;
        ctx.body = { error: "Couldn't find user in array." }
    }
});

router.post('/users', async (ctx) => {
    users.push(ctx.request.body); 
    ctx.body = users;
});

router.delete('/users/:id', async (ctx) => {
    const { id } = ctx.params;

    try {
        if (users && id < users.length){
            users.splice(id, 1);
            ctx.body = users
        }
        else {
            ctx.response.status = 400;
            ctx.body = { error: "Non existent Index" }
        }
    } catch (error) {
        ctx.response.status = 400;
        ctx.body = { error: "Couldn't find user in array." }
    }
    
})



app
    .use(router.routes())
    .use(router.allowedMethods())

const server = app.listen(PORT)

module.exports = server;