import config from './authConfig';
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-auth', (baseConfig)=>{   //the name of plugin becomes 'paulvanbladel/aurelia-auth'
    	baseConfig.configure(config);
    });

  aurelia.start().then(a => a.setRoot());
}
