<template>
	<ul class="category">
		<li class="category__item">
			<button type="button">
				<img src="~/assets/images/img_cat1.gif">
			</button>
		</li>
		<li class="category__item">
			<button type="button">
				<img src="~/assets/images/img_cat2.gif">
			</button>
		</li>
		<li class="category__item">
			<button type="button">
				<img src="~/assets/images/img_cat3.gif">
			</button>
		</li>
		<li class="category__item">
			<button type="button">
				<img src="~/assets/images/img_cat4.gif">
			</button>
		</li>
		<li class="category__item">
			<button type="button">
				<img src="~/assets/images/img_cat5.gif">
			</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'Category',
	data() {

	},
}
</script>

<style lang="scss" scoped>
	.category {
		max-width:240px;
		margin:0;
		border:1px solid #eee;
		box-shadow:2px 2px 5px rgba(0,0,0,0.1);
		font-size:0;
		&__item {
			display:inline-block;
			button {
				border:none
			}
		}
	}
</style>
