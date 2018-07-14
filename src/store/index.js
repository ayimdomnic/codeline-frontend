import Vue from 'vue'
import Vuex from 'vuex'
import locations from './modules/locations.js'

Vue.use(Vuex)

const debug new Vuex.Store({
	modules: {
		locations
	},

	strict: debug
})