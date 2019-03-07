import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return new Promise((resolve) => {
      setTimeout(()=>{resolve(`hi, ${name}`)}, 100);
    });
  }
  public async getApex() {
    var result = await this.app.mongo.find('shop');
    console.log(result);
    return result[0].data
  }
  public async addProduct(reqData:object) {
    var result = await this.app.mongo.find('shop');
    console.log(reqData);
    return result[0].data
  }
}
