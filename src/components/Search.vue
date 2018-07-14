<template>
	<div>
		<h2 class="display-4 text-center"> Search Results </h2>
		<div v-if="searchData.length > 0" class="row justify-content-center align-items-stretch text-center">
			<div class="col-12 col-md-6" v-for="loc in searchData">
				<weather :woeid="loc.woeid"/>
				<router-link class="btn btn-link btn-lg" :to="{ name: 'location', params: { woeid: loc.woeid }}">More </router-link>
				<hr>
			</div>
		</div>
		<div v-else>
			<div class="alet alert-dark text-center mx-4" role="alert">No Results Found</div>
		</div>
	</div>
</template>

<script>
	import _flatten from "loadash/flatten"
	import { mapGetters} from 'vuex'
	import Weather from './Weather'

	export default {
		mounted() {
			this.search()
		},

		data() {
			return {
				searchData: []
			}
		},

		methods: {
			search() {
				this.$store.dispatch('search'. {this.$route.params.keyword})
				.then((result) => {
					this.searchData = _flatten(result)
				})
				.catch((err) => {
					this.searchData = _flatten(err);
				})
			}
		}

		components: {
			Weather
		}
	}
</script>
<style>
	
</style>