<template>
	<article class="prose">
		<!-- prose-pre:bg-gray-100 prose-pre:text-gray-700 -->
		<!-- prose style from tailwindcss/typography -->
		<ContentDoc />
	</article>
</template>

<script setup>
const route = useRoute();
// console.log(route.params.slug);
</script>
