<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref, onMounted, onUnmounted } from "vue";
</script>

<template>
	<NuxtLoadingIndicator
		color="rgba(260, 142, 128, 1)"
		:height="6"
		:duration="3000"
		:throttle="0"
	/>

	<div class="relative z-10 flex flex-col min-h-screen">
		<Header />
		<div class="container mx-auto max-w-5xl px-4 flex-grow">
			<main class="mt-8">
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</template>

<style lang="scss"></style>
