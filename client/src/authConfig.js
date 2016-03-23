var configForDevelopment = {
    loginRedirect: '/#welcome',  
	providers: {
        
         identSrv : {
            name: 'identSrv',
            url: '/auth/identSrv',
            authorizationEndpoint: 'http://localhost:22530/connect/authorize', //if this ends with slash --> game over
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'openid'],
            
            responseType :'code',


            scopePrefix: '',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope', 'nonce'],
            optionalUrlParams: ['display', 'state'],
            display: 'popup',
            type: '2.0',
            clientId: 'jsclient',
            
            popupOptions: { width: 452, height: 633 }
        },
        
		google: {
			//responseType :'code',
			clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com',
			state: function(){
                var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
                return encodeURIComponent(val);
            }
		} 
		,
		linkedin:{
			clientId:'778mif8zyqbei7'
		},
		facebook:{
			clientId:'1452782111708498'
		}
	}
};

var configForProduction = {
	providers: {
		google: {
			clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
		} 
		,
		linkedin:{
			clientId:'7561959vdub4x1'
		},
		facebook:{
			clientId:'1653908914832509'
		}

	}
};
var config ;
if (window.location.hostname==='localhost') {
	config = configForDevelopment;
}
else{
	config = configForProduction;
}


export default config;
