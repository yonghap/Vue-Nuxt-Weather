import Vue from 'vue'

Vue.mixin({
	methods:{
		/**
		 * 미세먼지 정보
		 * @param pm10
		 * @returns {{color: string, text: string}}
		 */
		translateFineDust(pm10) {
			let returnData = {
				'color' : '',
				'text' : ''
			}
			if (pm10 > 150) { returnData.color = '#e64746'; returnData.text = '매우 나쁨'; }
			if (pm10 < 150) { returnData.color = '#fda60e'; returnData.text = '나쁨'; }
			if (pm10 < 80) { returnData.color = '#00c73c'; returnData.text = '보통'; }
			if (pm10 < 30) { returnData.color = '#32a1ff'; returnData.text = '좋음'; }
			return returnData;
		},

		/**
		 * 초미세먼지 정보
		 * @param pm2_5
		 * @returns {{color: string, text: string}}
		 */
		translateUltraFineDust(pm2_5) {
			let returnData = {
				'color' : '',
				'text' : ''
			}
			if (pm2_5 > 75) { returnData.color = '#e64746'; returnData.text = '매우 나쁨'; }
			if (pm2_5 < 75) { returnData.color = '#fda60e'; returnData.text = '나쁨'; }
			if (pm2_5 < 35) { returnData.color = '#00c73c'; returnData.text = '보통'; }
			if (pm2_5 < 15) { returnData.color = '#32a1ff'; returnData.text = '좋음'; }
			return returnData;
		},

		/**
		 * 날짜 변환
		 * @param dt - data time
		 * @param type
		 * @returns {string}
		 */
		translateTimeStamp(dt, type) {
			let newDate  = new Date(dt * 1000);
			if (type == 'date') {
				return (newDate.getMonth()+1) + "월 " + newDate.getDate() + '일';
			} else {
				return newDate.getHours() + ":" + newDate.getMinutes() + '0';
			}
		},
	}
})
