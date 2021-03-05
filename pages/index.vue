<template>
	<div id="main" class="main">
		<section class="box">
			<h2 class="title">
				Today’s Weather
			</h2>
			<p class="desc">
				날씨 서비스 토이프로젝트입니다.<br>
				해당 지역을 선택하여 날씨 정보를 확인할 수 있습니다.
			</p>
			<ul class="skills">
				<li>Prototype : Figma</li>
				<li>FrontEnd : VueJS</li>
				<li>ETC : Vuex, NuxtJS</li>
				<li>CSS : SCSS</li>
				<li>API : OpenWeather</li>
			</ul>
			<TheLocations />
		</section>
	</div>
</template>

<script>
// import { mapMutations } from 'vuex'
import TheLocations from "../components/TheLocations";

export default {
	components: {
		TheLocations
	}
}
</script>
