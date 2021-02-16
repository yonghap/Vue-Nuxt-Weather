<template>
	<div id="main" class="main" v-if="weatherData">
		<section class="box">
			<article class="current">
				<div class="row">
					<div class="col">
						<div class="current__temp">
							{{ parseInt(weatherData.current.temp - 273.15) }}°
						</div>
						<div class="current__main">
							{{ weatherData.current.weather[0].main }}
						</div>
					</div>
					<div class="col">
						<div class="current__icon">
							<img src="~@/assets/images/partly-cloudy.png">
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
						{{ weatherData.current.humidity }}%
					</strong>
					Humidity
				</div>
				<div class="col">
					<strong>
						{{ parseInt(weatherData.current.feels_like - 273.15) }}°
					</strong>
					Feels Like
				</div>
				<div class="col">
					<strong>
						{{ weatherData.current.wind_speed }}
					</strong>
					Wind
				</div>
			</article>
		</section>
		<section class="box">
			<h2 class="title">
				Today
			</h2>
			<ul class="list">
				<li v-for="n in 4">
					<div class="list__icon">
						<img src="~@/assets/images/sunny.png" v-if="n == 1">
						<img src="~@/assets/images/partly-cloudy.png" v-if="n == 2">
						<img src="~@/assets/images/sleet.png" v-if="n == 3">
						<img src="~@/assets/images/showers.png" v-if="n == 4">
					</div>
					<div class="list__temp">
						{{ parseInt(weatherData.hourly[n * 3].temp - 237.15) }}°
					</div>
					<div class="list__time">
						{{ translateTimeStamp(weatherData.hourly[n * 3].dt) }}

					</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			weatherData : ''
		}
	},
	methods : {
		translateTimeStamp(dt) {
			let newDate  = new Date(dt * 1000);
			return newDate.getHours() + ":" + newDate.getMinutes() + '0';
			// return newDate.getFullYear() + "-" + (newDate.getMonth()+1) + "-" + newDate.getDate() +
			// 	" " + newDate.getHours() + ":" + newDate.getMinutes();
		},
		async fetchWeather() {
			const prm = {
				params: {
					lat : '37.5683',
					lon : '126.9778',
					exclude : '',
					appid : '754f7bf1ddc3ba9c85002d9fb4143682'
				}
			}
			const weather = await this.$axios.$get('https://api.openweathermap.org/data/2.5/onecall', prm);
			this.weatherData = weather;
		}
	},
	created() {
		this.fetchWeather();
	}
}
</script>

<style lang="scss">

</style>
