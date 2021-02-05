<template>
	<div id="main" class="main">

	</div>
</template>

<script>
export default {
	created() {
		this.$axios.get('https://api.openweathermap.org/data/2.5/weather', {
			params: {
				q : 'seoul',
				appid : '754f7bf1ddc3ba9c85002d9fb4143682'
			},
		}).then(res => {
			console.log(res.data)
		});
	}
}
</script>

<style lang="scss">

</style>
