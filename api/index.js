const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/weather', (ctx, next) => {
  ctx.body = {
    // rainfall - 50% chance of zero, 50% chance of random integer between 0 and 5
    rainfall: Math.round(Math.random()) === 0 ? 0 : Math.round(Math.random() * 5),
    // status: 50% chance of 'sunny', 50% chance of 'overcast'
    status: Math.round(Math.random()) === 0 ? 'sunny' : 'overcast',
    // temperature: Random integer between zero and 30
    temperature: Math.round(Math.random() * 30)
  };
}).get('/word', (ctx, next) => {
  const wordList = [
    'test',
    'driven',
    'development'
  ];
  ctx.body = {
    word: wordList[Math.floor(Math.random() * wordList.length)]
  };
});

const port = 8080;
console.log(`API listening on port ${port}`);
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8080);