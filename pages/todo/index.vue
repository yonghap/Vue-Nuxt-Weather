<template>
	<div class="content">
		<Timer/>
		<div class="todo-list">
			<ul class="list">
				<li>
					<div class="list__category">카테고리</div>
					<div class="list__info">
						<div class="list__title">
							소스코드 정리
						</div>
						<div class="list__desc">
							Vue + Nuxt 프로젝트
						</div>
					</div>
					<div class="list__meta">
						<div class="list__dday">D-3</div>
						<div class="list__location">
							11-20 11:11 E마트
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'content'
}
</script>

<style lang="scss">
.list {
	li {
		position:relative;
		padding-left:100px;
	}
}
</style>
