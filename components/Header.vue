<template>
	<header class="relative z-10 pt-12 pb-8 lg:px-6 border-b border-gray-700">
		<h1
			class="text-4xl sm:text-3xl font-semibold lxgw-wenkai-tc-bold text-center"
		>
			<img
				src="/images/logo.png"
				alt="筆力 - 探索與記錄的產地"
				class="mx-auto mb-3 w-28 sm:w-24"
			/>
			筆力 - 探索與記錄的產地
		</h1>
		<nav class="flex justify-center items-baseline space-x-4">
			<NuxtLink to="/" class="lxgw-wenkai-tc-regular text-lg">回首頁</NuxtLink>
			<NuxtLink to="/blogs" class="lxgw-wenkai-tc-regular text-lg"
				>所有文章</NuxtLink
			>
			<NuxtLink
				to="/"
				target="_blank"
				class="text-[1.8rem] translate-y-[1px]"
				external
			>
				<Icon name="mdi:facebook-box" />
			</NuxtLink>
		</nav>
	</header>
</template>
