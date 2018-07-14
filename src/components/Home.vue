<template>
	<div>
		<h2 class="display-4 text-center mb-4">Home Page</h2>
		<div v-if="citydata.length > 0" class="row justify-content-center align-items-stretch text-center">
			<div class="col-12 col-md-6" v-for="loc in cityData">
				<weather :woeid="loc.woeid"/>
				<router-link class="btn btn-link btn-lg" :to="{ name: 'location', params: { woeid: loc.woeid }"> More </router-link>
				<hr>
			</div>
		</div>
	</div>
</template>
<script>
	import _flatten from 'loadsh/flatten'
	import _each from 'loadsh/each'
	import weather from './Weather'

	export default {
		mounted () {
			this.bootHome() 
		},

		methods: {
			bootHome() {
				_each(this.startingCities, city => {
					this.$store.dispatch('search', {keyword: city})
					.then((result) => {
						this.temp.push(result)
					})
					.catch((err) => {
						this.temp.push(err)
					})
				})
			}
		},

		components: {
			weather
		},

		computed: {
			cityData() {
				return _flatten(this.temp)
			}
		},

		data() {
			return {
				temp: [],
				startingCities: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver']
			}
		},
	}
</script>
<style>
	h1, h2 {
		font-weight: normal;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>