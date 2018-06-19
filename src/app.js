import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { createRouter} from "./router";
import './assets/main.css'
Vue.use(Vuelidate)
export function createApp () {
	
	const router = createRouter();
	
	const app = new Vue({
		
		router,
		render: h => h(App)
	});
	return { app, router}
}
