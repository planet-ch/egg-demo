// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportJinseyun from '../../../app/controller/jinseyun';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    jinseyun: ExportJinseyun;
  }
}
