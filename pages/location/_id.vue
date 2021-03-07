<template>
	<div id="sub" class="sub" v-if="weatherData && air.data">
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
							<img :src="require(`~/assets/images/${weatherData.current.weather[0].icon}@2x.png`)">
						</div>
					</div>
				</div>
			</article>
			<article class="info">
				<h2 class="info__name">
					Howdy! {{ currentLocation.nameeng }}
				</h2>
				<div class="info__location">
					<TheLocations v-bind:local="currentLocation.nameeng"></TheLocations>
				</div>
			</article>
		</section>
		<section class="box">
			<h2 class="title">
				Today
				<small>
					{{ translateTimeStamp(weatherData.current.dt, 'date') }}
				</small>
			</h2>
			<ul class="list">
				<li v-for="n in 4">
					<div class="list__icon">
						<img :src="require(`~/assets/images/${weatherData.hourly[n - 1].weather[0].icon}@2x.png`)">
					</div>
					<div class="list__title">
						{{ parseInt(weatherData.hourly[n * 3].temp - 273.15) }}°
					</div>
					<div class="list__subtitle">
						{{ translateTimeStamp(weatherData.hourly[n * 3].dt) }}

					</div>
				</li>
			</ul>
			<article class="etc">
				<div class="col">
					<strong>
						{{ weatherData.current.humidity }}%
					</strong>
					Humidity<br>
					(습도)
				</div>
				<div class="col">
					<strong>
						{{ parseInt(weatherData.current.feels_like - 273.15) }}°
					</strong>
					Feels Like<br>
					(체감 온도)
				</div>
				<div class="col">
					<strong>
						{{ weatherData.current.wind_speed }}
					</strong>
					Wind<br>
					(풍속)
				</div>
			</article>
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
					<div class="list__title" v-bind:style="{ color : translateFineDust(air.data.list[0].components.pm10).color }">
						{{ translateFineDust(air.data.list[0].components.pm10).text }}
					</div>
					<div class="list__subtitle">
						{{ air.data.list[0].components.pm10 }} ㎍/㎥
					</div>
				</li>
				<li>
					<div class="list__air">
						초미세먼지
					</div>
					<div class="list__title" v-bind:style="{ color : translateUltraFineDust(air.data.list[0].components.pm2_5).color }">
						{{ translateUltraFineDust(air.data.list[0].components.pm2_5).text }}
					</div>
					<div class="list__subtitle">
						{{ air.data.list[0].components.pm2_5 }} ㎍/㎥
					</div>
				</li>
			</ul>
		</section>
		<section class="box">
			<h2 class="title">
				8-day Forecast
			</h2>
			<ul class="item">
				<li v-for="item in weatherData.daily">
					<span class="item__date">
						{{ translateTimeStamp(item.dt, 'date') }}
					</span>
					<span class="item__box">
						<span>
							<img :src="require(`~/assets/images/${item.weather[0].icon}@2x.png`)">
						</span>
						<span>
							오전 <strong>{{ parseInt(item.temp.morn - 273.15) }}°</strong> /
							오후 <strong>{{ parseInt(item.temp.eve - 273.15) }}°</strong>
						</span>
					</span>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentLocation : null,
			weatherData : '',
			air : {
				data : '',
				pm10 : '',
				pm2_5 : ''
			}
		}
	},
	head() {
		return {
			title: 'Today’s Weather - ' + this.$route.params.id,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Today’s Weather - ' + this.$route.params.id,
				}
			]
		}
	},
	mounted() {
		this.currentLocation = this.$store.state.locations.find(n => {
			return n.nameeng == this.$route.params.id
		});
	},
	methods : {
		/**
		 * 날씨예보
		 * @returns {Promise<void>}
		 */
		async fetchWeather() {
			const prm = {
				params: {
					lat : this.currentLocation.lat,
					lon :  this.currentLocation.lon,
					exclude : '',
					appid : '754f7bf1ddc3ba9c85002d9fb4143682'
				}
			}
			const weather = await this.$axios.$get('https://api.openweathermap.org/data/2.5/onecall', prm);
			this.weatherData = weather;
		},
		/**
		 * 미세먼지 정보
		 * @returns {Promise<void>}
		 */
		async fetchAir() {
			const prm = {
				params: {
					lat : this.currentLocation.lat,
					lon : this.currentLocation.lon,
					appid : '754f7bf1ddc3ba9c85002d9fb4143682'
				}
			}
			const air = await this.$axios.$get('https://api.openweathermap.org/data/2.5/air_pollution', prm);
			this.air.data = air;
		}
	},
	created() {
		this.$nextTick(function ()  {
			this.fetchWeather();
			this.fetchAir();
		})
	}
}
</script>
