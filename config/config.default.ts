import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551867360279_5178';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.security = {
    csrf: false,
  };
  config.mongo = {
    client: {
      host: "127.0.0.1",
      port: "27017",
      name: "myData",
      user: "",
      password: "",
      options: {},
    }
  }
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
