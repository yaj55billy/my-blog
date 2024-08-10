<script setup>
defineProps({
	error: { type: Object },
});
</script>

<template>
	<NuxtLayout>
		<section class="flex flex-col min-h-96 items-center justify-center">
			<h1 class="mb-2">Oops... {{ `(${error.statusCode})` }}</h1>
			<h2>無此頁面唷！</h2>
		</section>
	</NuxtLayout>
</template>
