<template>
	<header class="relative z-10 py-10">
		<NuxtLink to="/" class="text-4xl font-semibold lxgw-wenkai-tc-bold"
			>筆力 - 探索與記錄的產地</NuxtLink
		>
		<nav>
			<ul class="flex justify-between items-center space-x-4">
				<li>
					<NuxtLink to="/blogs" class="link">所有文章</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/categories" class="link">所有分類</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss">
.lxgw-wenkai-tc-light {
	font-family: "LXGW WenKai TC", cursive;
	font-weight: 300;
	font-style: normal;
}

.lxgw-wenkai-tc-regular {
	font-family: "LXGW WenKai TC", cursive;
	font-weight: 400;
	font-style: normal;
}

.lxgw-wenkai-tc-bold {
	font-family: "LXGW WenKai TC", cursive;
	font-weight: 700;
	font-style: normal;
}
</style>
