import config from './authConfig';
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('./aureliauth/index', (baseConfig)=>{   //the name of plugin becomes 'paulvanbladel/aureliauth'
    	baseConfig.configure(config);
    });

  aurelia.start().then(a => a.setRoot());
}
