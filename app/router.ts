import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/jinseyun', controller.jinseyun.jinseyun);
  router.get('/getData', controller.getApex.getApex);
};
