<template>
	<div id="main" class="main">
		<div class="info box" id="info">
			<div class="info__status" v-if="weatherData.currentWeather">
				<img src="~@/assets/images/sunny.png">
				<div class="info__temp">
					<strong>{{ parseInt(weatherData.currentWeather.main.temp - 273.15) }}</strong>°
				</div>
				<div class="info__number">
					<strong>{{ parseInt(weatherData.currentWeather.main.temp_max - 273.15) }}</strong>°
					/
					<strong>{{ parseInt(weatherData.currentWeather.main.temp_min - 273.15) }}</strong>°
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			weatherData : {
				currentWeather : '',
				forecastWeather : ''
			}
		}
	},
	created() {
		let $vm = this,
			currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather',
			forecastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
		let prm = {
			params: {
				q : 'seoul',
				appid : '754f7bf1ddc3ba9c85002d9fb4143682'
			}
		}
		const currentWeatherData = this.$axios.get(currentWeatherUrl,prm),
			forecastWeatherData = this.$axios.get(forecastWeatherUrl,prm);

		Promise.all([currentWeatherData, forecastWeatherData]).then(function(values) {
			$vm.weatherData.currentWeather = values[0].data;
			$vm.weatherData.forecastWeather = values[1].data;
			console.log($vm.weatherData);
		});

	}
}
</script>

<style lang="scss">

</style>
