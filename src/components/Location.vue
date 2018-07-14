<template>
	<div>
		<h2 class="display-4 text-center"> Weather Details Page </h2>
		<weather :extended="true" :woeid="woeid"></weather>
		<hr>
	</div>
</template>
<script>
	import weather from './Weather'

	export default {
		computed: {
			woeid() {
				return this.$route.params.woeid
			}
		},

		components: {
			Weather
		}
	}
</script>
<style>
	
</style>