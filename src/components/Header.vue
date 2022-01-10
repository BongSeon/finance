<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/consult">Consult</router-link> |
    <router-link to="/faq">Faq</router-link>
  </div> -->
  <!-- begin #header -->
	<div id="header" class="header navbar navbar-default navbar-expand-lg navbar-fixed-top">
		<!-- begin container -->
		<div class="container">
			<!-- begin navbar-brand -->
			<a href="index.html" class="navbar-brand">
				<span class="brand-logo"></span>
				<span class="brand-text">
					제이와이 대부
				</span>
			</a>
			<!-- end navbar-brand -->
			<!-- begin navbar-toggle -->
			<button type="button" class="navbar-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#header-navbar">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<!-- end navbar-toggle -->
			<!-- begin navbar-collapse -->
			<div class="collapse navbar-collapse" id="header-navbar">
				<ul class="nav navbar-nav navbar-right">
					<li><router-link to="/">소개</router-link></li>
					<li><router-link to="/Faq">상품안내</router-link></li>
					<li><router-link to="/consult">상담문의</router-link></li>
					<li><router-link to="/">오시는길</router-link></li>
				</ul>
			</div>
			<!-- end navbar-collapse -->
		</div>
		<!-- end container -->
	</div>
	<!-- end #header -->
</template>

<script>
export default {

}
</script>

<style>

</style>