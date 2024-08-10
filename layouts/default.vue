<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref, onMounted, onUnmounted } from "vue";
</script>

<template>
	<div class="relative z-10 flex flex-col min-h-screen">
		<Header />
		<div class="container mx-auto max-w-7xl px-6 flex-grow">
			<main class="mt-8">
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</template>
