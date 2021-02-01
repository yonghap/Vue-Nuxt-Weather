<template>
	<div class="content">
		<Timer/>
		<section class="todo-list">
			<ul class="list">
				<li>
					<div class="list__category">
						<Category/>
					</div>
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
		</section>
		<div class="btn-wrap">
			<a href="#" class="btn-add">
				할일 추가하기
			</a>
		</div>
	</div>
</template>

<script>

export default {
	layout: 'content'

}
</script>

<style lang="scss">
.todo-list {
	padding:30px 0;
}
.list {
	li {
		display:flex;
		align-items:center;
		padding:20px 0;
		border-bottom:1px solid #ccc;
	}
	&__category {
		position:relative;
		flex-basis:120px;
		flex-grow:0;
	}
	&__info {
		flex-grow:1;
		flex-basis:50%;
	}
	&__title {
		font-size:36px
	}
	&__desc {
		font-size:18px;
		color:#666
	}
	&__meta {
		flex-grow:1;
		text-align:right;
	}
	&__dday {
		font-size:28px;
		font-weight:bold;
	}
}
</style>
