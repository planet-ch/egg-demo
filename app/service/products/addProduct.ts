import { Service } from 'egg';

/**
 * Test Service
 */
export default class AddProduct extends Service {
private collectionName: string = 'shopList';
  /**
   * sayHi to you
   * @param name - your name
   */
  public async addProduct(reqData:any) {
    console.log(reqData);
    return this.app.mongo.db
      .collection(this.collectionName)
      .insertOne(reqData)
      .catch(this.logger.info);
  }
}
