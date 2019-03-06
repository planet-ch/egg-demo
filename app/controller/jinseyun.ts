import { Controller } from 'egg';

export default class JinseyunController extends Controller {
  public async jinseyun() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('jinseyun');
  }
}
