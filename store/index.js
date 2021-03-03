export const state = () => ({
	locations : [
		{
			name : 'seoul',
			lat : '37.5683',
			lon : '126.9778'
		},
		{
			name : 'busan',
			lat : '35.138311',
			lon : '129.0216844'
		},
		{
			name : 'gwangju',
			lat : '35.1594477',
			lon : '126.8446427'
		},
		{
			name : 'daejeon',
			lat : '36.350461',
			lon : '127.3826247'
		},
		{
			name : 'gangneung',
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
