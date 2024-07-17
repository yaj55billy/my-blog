<script setup>
const { data } = await useAsyncData("blog-list", () =>
	queryContent("/blogs").only(["categories"]).find()
);

const allCategories = {};
data.value?.forEach((item) => {
	const categories = item.categories || [];
	categories.forEach((category) => {
		allCategories[category] = (allCategories[category] || 0) + 1;
	});
});

console.log(allCategories);

// SEO
useHead({
	title: "Categories",
	meta: [
		{
			name: "description",
			content:
				"Below All the topics are listed on which either I have written a blog or will write a blog in near future.",
		},
	],
});
</script>

<template>
	<h2>分類首頁</h2>
	<!-- {{ allCategories }} -->
	<ul>
		<!-- <li v-for="topic in allCategories" :key="topic[0]">
			{{ topic[0] }}
		</li> -->

		<li v-for="(count, category) in allCategories" :key="category">
			{{ category }}: {{ count }}
		</li>
	</ul>
</template>
