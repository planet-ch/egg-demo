import { Controller } from 'egg';

export default class AddProductController extends Controller {
  public async addProduct() {
    const { ctx } = this;
    const reqData = { ...ctx.request.body, ...ctx.request.query };
    ctx.body = await ctx.service.products.addProduct.addProduct(reqData);
  }
}
