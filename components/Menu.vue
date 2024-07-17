<template>
	<nav>
		<ul class="flex space-x-4">
			<!-- <li>
        <NuxtLink to="/" class="link">index</NuxtLink>
      </li> -->
			<li>
				<NuxtLink to="/blogs" class="link">所有文章</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/categories" class="link">所有分類</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/" class="link">程式記錄</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/" class="link">生活記錄</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
.link {
	@apply p-1 text-xl text-white;
}
</style>
