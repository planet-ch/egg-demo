// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportProductsAddProduct from '../../../app/service/products/addProduct';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    products: {
      addProduct: ExportProductsAddProduct;
    }
  }
}
