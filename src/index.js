//importing base project envs and packages
const PORT = process.env.PORT || 3000

import Koa from 'koa';

const app = new Koa();
import router from './routes.js'

app
.use(router.routes())
.use(router.allowedMethods())

const server = app.listen(PORT)

export default server;
