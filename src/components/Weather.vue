<template>
	<article>
		<div v-if="tday" class="card mx-md-4">
			<h3 class="card header"> {{ locationData.title}}</h3>
			<div class="card-body">
				<div class="row">
					<div class="col-2">
						<img :src="icon(tday.weather_state_abbr)" alt=""/>
					</div>
					<div class="col align-self-center">
						<h5 class="card-title"> Temperature: {{ tday.the_temp}}</h5>
						<h5 class="card-title"> Maximum Temperature: {{ tday.max_temp}}</h5>
						<h5 class="card-title"> Minimum Temperature: {{ tday.min_temp}}
					</div>
				</div>
				<div v-if="extended">

				<hr>

				<div class="row my-4" v-for="restDay in locationData.consolidated_weather">
					<div class="col-2">
						<img :src="icon(restDay.weather_state_abbr)" alt=""/>
					</div>
					<div class="col align-self-center">
						<h5 class="card-title">Temperature: {{ restDay.the_temp }}</h5>
						<h5 class="card-title">Maximun Temperature: {{ restDay.max_temp }}</h5>
						<h5 class="card-title">Minimum Temperature: {{ restDay.min_temp }}</h5>
					</div>
					<div class="col align-self-start text-right">
						<p class="card-title">{{ formatDate(restDay.applicable_date) }}</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	</article>
</template>

<script>
	import Moment from 'moment'
	import _find from 'lodash/find'
	import { mapGetters } from 'vuex'

	export default {
		this.location()
	}, 

	 methods: {
	 	location() {
	 		this.$store.dispatch('location', { woeid: this.woeid })
	 	},

	 	formatDate(d) {
	 		return Moment(d).format('dddd MMM, YYYY')
	 	},

	 	icon(img) {
	 		return 'https://www.metaweather.com/static/img/weather/'+ img +'.svg'
	 	},

	 	currDate() {
	 		let now = new Date()
	 		let y = now.getFullYear()
	 		let m = now.getMonth()
	 		let d = now.getDate()
	 		let mm = m < 10 ? '0' + m : m
	 		let dd = d < 10 ? '0' + d : d
	 		return `${y}-${mm}-${dd}`
	 	}
	 },

	 computed: {
	 	...mapGetters({
	 		locationData: 'locationData'
	 	}),
	 	tday() {
	 		const w = this.locationData.consolidated_weather
	 		const d = this.currDate()
	 		retrun _find(w, function(o) { return o.applicable_date === d})
	 	}
	 },

	 data() {
	 	return {

	 	}
	 },

	 props: ['woeid', 'extended']
</script>