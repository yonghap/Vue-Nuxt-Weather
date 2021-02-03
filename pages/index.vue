<template>
	<div id="intro" class="intro">
		<div class="intro__wrap">
			<div class="intro__inner">
				<h1 class="logo">
					<strong>Todo</strong> Lists
				</h1>
				<div class="intro__btn">
					<NuxtLink to="/todo" class="btn-intro">
						+
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

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
		margin-top:25px
	}
}
.logo {
	font-weight:normal;
	strong {
		font-weight:bold;
	}
}
.btn-intro {
	display:inline-block;
	width:60px;
	height:60px;
	border:1px solid #ccc;
}
</style>
