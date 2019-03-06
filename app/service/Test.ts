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
    var result = await this.app.mongo.db.collection('APEX').find();
    return result
  }
}
