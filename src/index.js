//importing base project envs and packages
import Koa from "koa";
import router from "./routes.js";

const app = new Koa();

app
    .use(router.routes())
    .use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT);

export default server;
