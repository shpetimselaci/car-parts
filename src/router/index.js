import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const createRouter = () => {
	return new Router({
		mode: 'history',
		routes: [
			{ path: '/', component: () => import('../components/Home.vue') },
			{ path: '/about', component: () => import('../components/About.vue') },
			{ path: '/mision', component: () => import('../components/Mision.vue') },
			{ path: '/vision', component: () => import('../components/Vision.vue') },
			{ path: '/service', component: () => import('../components/Service.vue') },
			{ path: '*', redirect: '/' }
		]
	});
};
