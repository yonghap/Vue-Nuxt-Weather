<template>
	<div id="main" class="main">
		<div class="current box" id="info">
			<div class="current__status" v-if="weatherData.currentWeather">
				<ul class="current__location">
					<li>{{ weatherData.currentWeather.name }}</li>
				</ul>
				<div class="current__icon">
					<img src="~@/assets/images/sunny.png">
				</div>
				<div class="current__temp">
					<strong>{{ parseInt(weatherData.currentWeather.main.temp - 273.15) }}</strong>°
				</div>
				<div class="current__number">
					<strong>{{ parseInt(weatherData.currentWeather.main.temp_max - 273.15) }}</strong>°
					/
					<strong>{{ parseInt(weatherData.currentWeather.main.temp_min - 273.15) }}</strong>°
				</div>
			</div>
		</div>
		<div class="forecast box">
			123
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
	methods : {
		translateTimeStamp(dt) {
			let newDate  = new Date(dt * 1000);
			return newDate.getFullYear() + "-" + (newDate.getMonth()+1) + "-" + newDate.getDate() +
				" " + newDate.getHours() + ":" + newDate.getMinutes();
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
