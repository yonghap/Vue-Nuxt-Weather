<template>
	<div id="intro" class="intro">
		<div class="intro__wrap">
			<div class="intro__inner">
				<h1 class="logo">
					<a href="/">
						<img src="~/assets/images/logo.jpg" alt="Todo">
					</a>
				</h1>
				<div class="intro__btn">
					<a href="/" class="btn">
						TODO
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.intro {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	text-align:center;
	&__wrap {
		display:flex;
		height:100%;
		justify-content:center;
		align-items:center;
	}
}
</style>
