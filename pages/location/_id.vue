<template>
	<div id="sub" class="sub" v-if="currentLocation && weatherData && air.data">
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
import { mapActions, mapGetters } from 'vuex'

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
	computed : {
		...mapGetters({
			currentLocation : 'getCurrentLocation'
		})
	},
	methods : {
		...mapActions({
			getWeather: 'fetchWeatherData'
		})
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
	created() {
		if (this.$route.params.id == 'MyLocation') {
			this.getLocation();
		} else {
			let current = this.$store.state.locations.find(n => {
				return n.nameeng == this.$route.params.id
			});
			this.$store.commit('setCurrentLocation', current)
		}
	},
	mounted() {
		this.$nextTick(function ()  {
			this.$store.dispatch('fetchWeatherData', {
				lat : this.currentLocation.lat,
				lon : this.currentLocation.lon
			}).then(response => {
				this.weatherData = response
			}, error => {
				console.log(error);
			})
			this.$store.dispatch('fetchAirData', {
				lat : this.currentLocation.lat,
				lon : this.currentLocation.lon
			}).then(response => {
				this.air.data = response;
			}, error => {
				console.log(error);
			})
		})
	},

}
</script>
