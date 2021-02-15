<template>
	<div id="main" class="main" v-if="weatherData.currentWeather">
		<section class="box">
			<article class="current">
				<div class="row">
					<div class="col">
						<div class="current__temp">
							{{ parseInt(weatherData.currentWeather.main.temp - 273.15) }}°
						</div>
						<div class="current__main">
							{{ weatherData.currentWeather.weather[0].main }}
						</div>
					</div>
					<div class="col">
						<div class="current__icon">
							<img src="~@/assets/images/sunny.png">
						</div>
					</div>
				</div>
			</article>
			<article class="info">
				<h2 class="info__name">
					Howdy, Park
				</h2>
				<div class="info__location">
					<select>
						<option value="seoul" selected>Seoul, South Korea</option>
						<option value="busal">Seoul, South Korea</option>
					</select>
				</div>
			</article>
			<article class="etc">
				<div class="col">
					<strong>
						{{ weatherData.currentWeather.main.humidity }}%
					</strong>
					Humidity
				</div>
				<div class="col">
					<strong>
						{{ parseInt(weatherData.currentWeather.main.feels_like - 273.15) }}°
					</strong>
					Feels Like
				</div>
				<div class="col">
					<strong>
						{{ weatherData.currentWeather.wind.speed }}
					</strong>
					Wind
				</div>
			</article>
		</section>
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
