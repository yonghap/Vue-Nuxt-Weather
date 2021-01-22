<template>
	<section id="timer" class="timer">
		<h2 class="blind">현재 날짜&시간</h2>
		<span class="timer__date">
			{{ date }}
		</span>
		<span class="timer__time">
			{{ time }}
		</span>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				interval : '',
				date : '',
				time : ''
			}
		},
		created() {
			this.init();
		},
		methods : {
			init() {
				var self = this;
				setInterval(() => {
					self.getTime();
					self.getDate();
				},1000)
			},
			getDate() {
				var now = new Date();
				var nowDate = now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getDate();
				this.date = nowDate;
			},
			getTime() {
				var now = new Date();
				var nowTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
				this.time = nowTime;
			}
		}
	}
</script>

<style lang="scss">
	.timer {
		text-align:right;
		&__date {
			display:inline-block;
			font-size:36px
		}
		&__time {
			display:inline-block;
			min-width:484px;
			font-size:120px;
			font-weight:bold;
			text-align:left;
		}
	}
</style>
