// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddProduct from '../../../app/controller/addProduct';
import ExportGetApex from '../../../app/controller/getApex';
import ExportHome from '../../../app/controller/home';
import ExportJinseyun from '../../../app/controller/jinseyun';

declare module 'egg' {
  interface IController {
    addProduct: ExportAddProduct;
    getApex: ExportGetApex;
    home: ExportHome;
    jinseyun: ExportJinseyun;
  }
}
