<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
			<span class="navbar-brand"> Weather App </span>
		</nav>
		<div class="container">
			<div class="row justify-content-center align-items-center">
				<div class="col-6 text-center">
					<form @submit.prevent="" v-if="processing" disabled>
						<div class="form-row">
							<div class="col-10">
								<input type="text"class="form-control" v-model.trim="term" aria-label="Large" aria-describedby="inputGroup-sizing-default">
							</div>
							<div class="col">
								<button type="submit" class='disabled btn btn-primary mb-2'></button>
							</div>
						</div>
					</form>
					<form @submit.prevent="doSearch" v-else>
                    <div class="form-row">
                        <div class="col-10">
                            <input type="text" class="form-control" v-model.trim="term" aria-label="Large" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <div class="col">
                            <button type="submit" class='btn btn-primary mb-2'>Search</button>
                        </div>
                    </div>
                </form>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
	import { mapGetters } from "vuex"

	export default {
		data () {
			return {
				term : ""
			}
		},

		computed: {
			...mapGetters({
				processing: 'processing'
			})
		},

		methods: {
			doSearch() {
				this.$router.push("/search" + this.term)
			}
		}
	}
</script>