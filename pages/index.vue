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
					<div class="list__title">
						{{ parseInt(weatherData.hourly[n * 3].temp - 237.15) }}°
					</div>
					<div class="list__subtitle">
						{{ translateTimeStamp(weatherData.hourly[n * 3].dt) }}

					</div>
				</li>
			</ul>
		</section>
		<section class="box">
			<h2 class="title">
				Air Polutions
			</h2>
			<ul class="list list--align">
				<li>
					<div class="list__air">
						미세먼지
					</div>
					<div class="list__title" v-bind:style="{ color : air.pm10 }">
						{{ translateFineDust(air.data.list[0].components.pm10) }}
					</div>
					<div class="list__subtitle">
						{{ air.data.list[0].components.pm10 }} ㎍/㎥
					</div>
				</li>
				<li>
					<div class="list__air">
						초미세먼지
					</div>
					<div class="list__title" v-bind:style="{ color : air.pm2_5 }">
						{{ translateUltraFineDust(air.data.list[0].components.pm2_5) }}
					</div>
					<div class="list__subtitle">
						{{ air.data.list[0].components.pm2_5 }} ㎍/㎥
					</div>
				</li>
			</ul>
		</section>
		<section class="box">
			<h2 class="title">
				8-day forecast
			</h2>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			weatherData : '',
			air : {
				data : '',
				pm10 : '',
				pm2_5 : ''
			}
		}
	},
	methods : {
		translateFineDust(pm10) {
			if (pm10 < 30) { this.air.pm10 = '#32a1ff'; return '좋음'; }
			if (pm10 < 80) { this.air.pm10 = '#00c73c'; return '보통'; }
			if (pm10 < 150) { this.air.pm10 = '#fda60e'; return '나쁨'; }
			if (pm10 > 150) { this.air.pm10 = '#e64746'; return '매우 나쁨'; }
		},
		translateUltraFineDust(pm2_5) {
			if (pm2_5 < 15) { this.air.pm2_5 = '#32a1ff'; return '좋음'; }
			if (pm2_5 < 35) { this.air.pm2_5 = '#00c73c'; return '보통'; }
			if (pm2_5 < 75) { this.air.pm2_5 = '#fda60e'; return '나쁨'; }
			if (pm2_5 > 76) { this.air.pm2_5 = '#e64746'; return '매우 나쁨'; }
		},
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
		},
		async fetchAir() {
			const prm = {
				params: {
					lat : '37.5683',
					lon : '126.9778',
					appid : '754f7bf1ddc3ba9c85002d9fb4143682'
				}
			}
			const air = await this.$axios.$get('https://api.openweathermap.org/data/2.5/air_pollution', prm);
			this.air.data = air;
		}
	},
	created() {
		this.fetchWeather();
		this.fetchAir();
	}
}
</script>

<style lang="scss">

</style>
