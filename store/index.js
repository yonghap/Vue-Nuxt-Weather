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
