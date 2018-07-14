import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home"
import Search from "@/components/Search"
import Location from "@/components/Location"
import NotFound from "@/components/NotFound"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home'
			component: Home
		},
		{
			path: '/search/:keyword',
			name: 'search',
			component: Search
		},
		{
			path: '/weather/:woeid',
			name: 'location',
			component: Location
		},
		{
			path: "*", name: 'not-found', component: NotFound
		},
	]
})