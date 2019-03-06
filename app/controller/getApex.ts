import { Controller } from 'egg';

export default class GetApexController extends Controller {
  public async getApex() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.getApex();
  }
}
