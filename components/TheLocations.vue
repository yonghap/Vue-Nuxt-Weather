<template>
	<div class="locations">
		<button type="button" class="btn-location"
				:class="{ active : this.$route.params.id == 'MyLocation' }"
				@click="goToLocation('MyLocation')"
		>
			내 위치
		</button>
		<button type="button" class="btn-location"
				v-for="item in locations"
				:class="{ active : local == item.nameeng }"
				@click="goToLocation(item.nameeng)"
		>
			{{ item.namekor }}
		</button>
	</div>
</template>

<script>
export default {
	props : {
		local : String
	},
	computed : {
		locations() {
			return this.$store.state.locations;
		}
	},
	methods : {
		goToLocation(local) {
			this.$router.push('/location/' + local);
		}
	}
}
</script>
