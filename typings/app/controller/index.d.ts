// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGetApex from '../../../app/controller/getApex';
import ExportHome from '../../../app/controller/home';
import ExportJinseyun from '../../../app/controller/jinseyun';

declare module 'egg' {
  interface IController {
    getApex: ExportGetApex;
    home: ExportHome;
    jinseyun: ExportJinseyun;
  }
}
