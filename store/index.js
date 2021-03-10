export const state = () => ({
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

export const mutations = {
	showLocations(state) {
		console.log(state.locations);
	}
}

export const actions = {
	async fetchWeatherData({ commint }) {
		return new Promise( (resolve, reject) => {
			const prm = {
				params: {
					lat : '37.5683',
					lon :  '126.9778',
					exclude : '',
					appid : '754f7bf1ddc3ba9c85002d9fb4143682'
				}
			}
			this.$axios.$get('https://api.openweathermap.org/data/2.5/onecall', prm)
				.then((result) => {
					console.log('호출완료');
					console.log(result);
				})
				.catch(err => {
					reject(err);
				})
		})
	}
}
