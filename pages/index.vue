<template>
	<div id="main" class="main">
		<div class="info box" id="info">
			<div class="info__status" v-if="weatherData">
				<img src="~@/assets/images/sunny.png">
				<div class="info__temp">
					<strong>{{ parseInt(weatherData.main.temp - 273.15) }}</strong>°
				</div>
				<div class="info__number">
					<strong>{{ parseInt(weatherData.main.temp_max - 273.15) }}</strong>°
					/
					<strong>{{ parseInt(weatherData.main.temp_min - 273.15) }}</strong>°
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			weatherData : null
		}
	},
	created() {
		this.$axios.get('https://api.openweathermap.org/data/2.5/weather', {
			params: {
				q : 'seoul',
				appid : '754f7bf1ddc3ba9c85002d9fb4143682'
			},
		}).then(res => {
			console.log(res.data)
			this.weatherData = res.data;
		});
	}
}
</script>

<style lang="scss">

</style>
