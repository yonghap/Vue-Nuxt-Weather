<template>
	<div class="content">
		<section class="todo-list">
			<h2 class="title">
				<strong>Todo</strong>
				Lists
				<span class="meta">
					Total : <strong>2</strong> / 5
				</span>
			</h2>
			<ul class="list">
				<li>
					<div class="list__check">
						<label for="todo1">
							<input type="checkbox" id="todo1" class="blind">
							<span class="chk"></span>
						</label>
					</div>
					<div class="list__info">
						<div class="list__title">
							소스코드 정리
						</div>
						<div class="list__desc">
							Vue + Nuxt 프로젝트
						</div>
					</div>
				</li>
				<li>
					<div class="list__check">
						<label for="todo2">
							<input type="checkbox" id="todo2" class="blind">
							<span class="chk"></span>
						</label>
					</div>
					<div class="list__info">
						<div class="list__title">
							소스코드 정리
						</div>
						<div class="list__desc">
							Vue + Nuxt 프로젝트
						</div>
					</div>
				</li>
				<li class="complete">
					<div class="list__info">
						<div class="list__title">
							소스코드 정리
						</div>
						<div class="list__desc">
							Vue + Nuxt 프로젝트
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
.list {
	li {
		display:flex;
		position:relative;
		align-items:center;
		padding:12px 15px 16px 15px;
		border-bottom:1px solid #ccc;
		&.complete {
			color:#d01a1a;
			.list__desc {
				color:#aaa;
			}
			.list__info {
				* {
					padding-left:40px;
				}
			}
			.list__title {
				position:relative;
				&:after {
					content:'';
					display:block;
					position:absolute;
					top:50%;
					left:0;
					width:100%;
					height:1px;
					background:#d01a1a;
				}
			}
		}
		&.complete:after {
			content:'';
			display:block;
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:rgba(0,0,0,0.2);
		}
	}
	&__check {
		position:relative;
		flex-basis:40px;
		flex-grow:0;
	}
	&__info {
		flex-grow:1;
		flex-basis:50%;
	}
	&__title {
		display:inline-block;
		font-size:16px
	}
	&__desc {
		font-size:14px;
		color:#666
	}
}
</style>
