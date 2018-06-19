const {API} = require('axios-client');
const client = API();

if(client.server){
	cacheSources();
}

function cacheSources(){
	setTimeout(cacheSources, 1000 * 60 * 10)
}