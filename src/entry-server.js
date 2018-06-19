import { createApp } from "./app";
export default context => {
	
	return new Promise((resolve, reject) => {
		
		const { app, router} = createApp();
		
		router.push(context.url);
		
		router.onReady(() => {
			
			const matchedComponents = router.getMatchedComponents();
			
			if(!matchedComponents.length){
				return reject({code: 404});
			}
			
			Promise.all(matchedComponents.map(Component => {
				if(Component.asyncData){
					return Component.asyncData({
						route: router.currentRoute
					})
				}
			})).then(() => {
				resolve(app);
			}).catch(reject);
		}, reject);
		
	});
};
