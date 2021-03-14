export const state = () => ({
	appid : '754f7bf1ddc3ba9c85002d9fb4143682',
	currentLocation : {
		nameeng : 'Seoul',
		namekor : '서울',
		lat : '37.5683',
		lon : '126.9778'
	},
	locations : [
		{
			nameeng : 'Seoul',
			namekor : '서울',
			lat : '37.5683',
			lon : '126.9778'
		},
		{
			nameeng : 'BuSan',
			namekor : '부산',
			lat : '35.138311',
			lon : '129.0216844'
		},
		{
			nameeng : 'GwangJu',
			namekor : '광주',
			lat : '35.1594477',
			lon : '126.8446427'
		},
		{
			nameeng : 'DaeJeon',
			namekor : '대전',
			lat : '36.350461',
			lon : '127.3826247'
		},
		{
			nameeng : 'GangNeung',
			namekor : '강릉',
			lat : '37.7519967',
			lon : '128.8059146'
		},
	]
});

export const getters = {
	getCurrentLocation : state => {
		return state.currentLocation;
	}
}

export const mutations = {
	setCurrentLocation(state, payload) {
		state.currentLocation = payload;
	}
}

export const actions = {
	/**
	 *
	 * @param commit
	 * @param state
	 * @param geoInfo
	 * @returns {Promise<unknown>}
	 */
	async fetchWeatherData( { commit, state }, geoInfo ) {
		return new Promise( (resolve, reject) => {
			const prm = {
				params: {
					lat : geoInfo.lat,
					lon :  geoInfo.lon,
					exclude : '',
					appid : state.appid
				}
			}
			this.$axios.$get('https://api.openweathermap.org/data/2.5/onecall', prm)
				.then((result) => {
					resolve(result);
				})
				.catch(err => {
					reject(err);
				})
		})
	},
	async fetchAirData( { commit, state }, geoInfo ) {
		return new Promise( (resolve, reject) => {
			const prm = {
				params: {
					lat : geoInfo.lat,
					lon :  geoInfo.lon,
					appid : state.appid
				}
			}
			this.$axios.$get('https://api.openweathermap.org/data/2.5/air_pollution', prm)
				.then((result) => {
					resolve(result);
				})
				.catch(err => {
					reject(err);
				})
		})
	},
	async fetchGeoLocation( {commit, state }, geoInfo) {
		return new Promise( (resolve, reject) => {
			const prm = {
				params: {
					lat : geoInfo.lat,
					lon :  geoInfo.lon,
					appid : state.appid
				}
			}
			this.$axios.$get('https://api.openweathermap.org/geo/1.0/reverse?&limit=5', prm)
				.then((result) => {
					resolve(result);
				})
				.catch(err => {
					reject(err);
				})
		})
	}
}
