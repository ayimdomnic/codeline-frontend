import Shop from '../../api/shop'
import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
	locationData: [],
	from: {
		processing: false
	}
}

const getters = {
	locationData = state => state.locationData,
	processing: state => state.form.processing
}

const actions = {
	search({ commit, state}, payload) {
		commit(types.FORM_SUBMIT)

		return new Promise((resolve, reject) => {
			shop.getAssync({ params: {
				command: 'search',
				keyword: payload.keyword
			}
		  },
		  data => {
		  	commit(types.FORM_RETURN)
		  		resolve(data)
		  },
		  err => {
		  	let data = [{"title":"Athens","location_type":"City","woeid":946738,"latt_long":"37.976151,23.736410"}]
		  	commit(types.FORM_RETURN)
		  	reject(data)
		  }

		 )
			
	  })

	},

	location ({ commit, state}, payload) {
		shop.getAssync({ params: {
			command 'location', 
			woeid: payload.woeid
		}
	 },

	 data => {
	 	commit(types.LOCATION_SET, data)
	 },

	 err => {
	 	err => {"consolidated_weather":[{"id":6646664412528640,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"SW","created":"2018-06-22T21:53:39.613559Z","applicable_date":"2018-06-23","min_temp":22.112499999999997,"max_temp":31.2925,"the_temp":30.185000000000002,"wind_speed":3.4353184505090275,"wind_direction":231.6896392589736,"air_pressure":1004.835,"humidity":55,"visibility":15.25435208383043,"predictability":75},{"id":5342424914198528,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"N","created":"2018-06-22T21:53:41.730842Z","applicable_date":"2018-06-24","min_temp":20.4175,"max_temp":28.015,"the_temp":28.28,"wind_speed":7.088803800023861,"wind_direction":1.3431941030937147,"air_pressure":1008.85,"humidity":63,"visibility":13.814324345820408,"predictability":73},{"id":4601807196127232,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"NNE","created":"2018-06-22T21:53:44.264872Z","applicable_date":"2018-06-25","min_temp":20.45,"max_temp":28.369999999999997,"the_temp":30.064999999999998,"wind_speed":7.535972529575281,"wind_direction":17.669966170332145,"air_pressure":1007.315,"humidity":51,"visibility":14.332858605742464,"predictability":71},{"id":4828677904793600,"weather_state_name":"Thunder","weather_state_abbr":"t","wind_direction_compass":"W","created":"2018-06-22T21:53:46.912305Z","applicable_date":"2018-06-26","min_temp":20.3975,"max_temp":26.2175,"the_temp":29.29,"wind_speed":5.227904094108407,"wind_direction":267.88062343516003,"air_pressure":1006.485,"humidity":64,"visibility":11.309266384315597,"predictability":80},{"id":4619978330341376,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SSE","created":"2018-06-22T21:53:49.991548Z","applicable_date":"2018-06-27","min_temp":20.4825,"max_temp":27.1475,"the_temp":30.45,"wind_speed":4.879555263925343,"wind_direction":158.0967326496598,"air_pressure":1005.76,"humidity":63,"visibility":9.997862483098704,"predictability":77},{"id":6468324821041152,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"W","created":"2018-06-22T21:53:52.922740Z","applicable_date":"2018-06-28","min_temp":20.6275,"max_temp":27.935000000000002,"the_temp":30.89,"wind_speed":5.202307988016649,"wind_direction":265.77659617293796,"air_pressure":1005.77,"humidity":60,"visibility":9.997862483098704,"predictability":71}],"time":"2018-06-23T03:09:18.961252+03:00","sun_rise":"2018-06-23T06:03:12.522075+03:00","sun_set":"2018-06-23T20:51:17.501579+03:00","timezone_name":"LMT","parent":{"title":"Greece","location_type":"Country","woeid":23424833,"latt_long":"39.072449,21.845560"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":180},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360},{"title":"Yahoo","slug":"yahoo","url":"http://weather.yahoo.com/","crawl_rate":180}],"title":"Athens","location_type":"City","woeid":946738,"latt_long":"37.976151,23.736410","timezone":"Europe/Athens"}
	        	commit(types.LOCATION_SET, err)
	 	}
	 )

	},
}

const mutations = {
	[types.LOCATION_SET] (state, result) {
		state.locationData = object.assign({}, result)
	},
	[types.FORM_SUBMIT] (state) {
		state.form.processing = true
	},
	[types.FORM_RETURN] (state) {
		state.form.processing = false
	},
}

export default {
	state,
	getters,
	actions,
	mutations
}