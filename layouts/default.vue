<script setup>
import Header from "@/components/Header.vue";
import { ref, onMounted, onUnmounted } from "vue";
</script>

<template>
	<div class="relative z-10">
		<div class="container mx-auto max-w-5xl px-4">
			<Header />
			<main>
				<slot />
			</main>
		</div>
	</div>
</template>

<style lang="scss"></style>
