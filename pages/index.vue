<template>
	<div id="intro" class="intro">
		<div class="intro__wrap">
			<div class="intro__inner">
				<h1 class="logo">
					<img src="~/assets/images/logo.jpg" alt="Todo">
				</h1>
				<div class="intro__btn">
					<NuxtLink to="/todo" class="btn-intro">
						TODO
					</NuxtLink>
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
	&__btn {
		margin-top:20px
	}
}
.btn-intro {
	display:inline-block;
	min-width:200px;
	padding:10px 20px;
	border:1px solid #ccc;
	background:#333;
	box-shadow:5px 5px 5px rgba(0,0,0,.3);
	color:#fff
}
</style>
