<script setup>
import StarBackground from "@/components/StarBackground.vue";
import { ref, onMounted, onUnmounted } from "vue";
</script>

<template>
	<!-- <StarBackground /> -->
	<div class="relative z-10">
		<div class="container mx-auto max-w-4xl">
			<header class="flex justify-between items-center mt-5">
				<div class="flex items-center space-x-12">
					<div>
						<NuxtLink to="/" class="text-2xl font-semibold text-slate-50"
							>Billy-Ji Blog</NuxtLink
						>
					</div>
					<Menu />
				</div>
				<!-- <colorModeSelector /> -->
			</header>
			<main class="p-2">
				<slot />
			</main>
		</div>
	</div>
</template>

<style lang="scss"></style>
