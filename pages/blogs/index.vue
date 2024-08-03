<script setup>
import Card from "@/components/Card.vue";

const { data } = await useAsyncData("blog-list", () =>
	queryContent("/blogs")
		.only(["_path", "title", "description", "date", "categories", "image"])
		.sort({ date: -1 }) // 最新文章在最前面
		.find()
);

const truncateText = (text, maxLength) => {
	if (text.length <= maxLength) {
		return text;
	}
	return text.slice(0, maxLength) + "...";
};

const formattedData = computed(() => {
	return (
		data.value?.map((article) => {
			return {
				path: article._path,
				title: article.title || "",
				description: truncateText(article.description || "", 45),
				date: article.date,
				categories: article.categories || [],
				image: article.image || "/not-found.jpg",
			};
		}) || []
	);
});

const pageSize = ref(6);
const pageIndex = ref(0);
const currentPageData = computed(() => {
	return (
		formattedData.value.filter((data, index) => {
			const startInd = pageIndex.value * pageSize.value;
			const endInd = pageIndex.value * pageSize.value + (pageSize.value - 1);
			if (index >= startInd && index <= endInd) {
				return true;
			} else {
				return false;
			}
		}) || []
	);
});
const totalPage = computed(() => {
	const formattedDataLength = formattedData.value.length || 0;
	return Math.ceil(formattedDataLength / pageSize.value);
});
const handlePageClick = (num) => {
	if (pageIndex.value + num < 0) {
		pageIndex.value = totalPage - 1;
	} else if (pageIndex.value + num > totalPage - 1) {
		pageIndex.value = 0;
	} else {
		pageIndex.value += num;
	}
};

// SEO
useHead({
	title: "Archive",
	meta: [
		{
			name: "description",
			content:
				"Here you will find all the blog posts I have written & published on this site.",
		},
	],
});
</script>

<template>
	<section class="grid grid-cols-2 gap-6">
		<Card :currentPageData="currentPageData"></Card>
	</section>
	<section>
		<nav aria-label="Page navigation" class="flex justify-center mt-6">
			<ul class="flex items-center space-x-2 text-base">
				<li
					class="cursor-pointer flex items-center justify-center w-12 h-12 border border-gray-700 rounded-md text-primary hover:bg-cardBg hover:text-secondary"
					@click="handlePageClick(-1)"
					:class="{ invisible: pageIndex === 0 }"
				>
					<span class="sr-only">Previous</span>
					<svg
						class="w-3 h-3 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
				</li>
				<li
					v-for="(page, index) in totalPage"
					:key="page + index"
					class="cursor-pointer flex items-center justify-center w-12 h-12 border border-gray-700 rounded-md text-primary hover:bg-cardBg hover:text-secondary"
					:class="{ 'bg-cardBg': index === pageIndex }"
					@click="pageIndex = page - 1"
				>
					{{ page }}
				</li>
				<li
					class="cursor-pointer flex items-center justify-center w-12 h-12 border border-gray-700 rounded-md text-primary hover:bg-cardBg hover:text-secondary"
					@click="handlePageClick(1)"
					:class="{ invisible: pageIndex === totalPage - 1 }"
				>
					<span class="sr-only">Next</span>
					<svg
						class="w-3 h-3 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
				</li>
			</ul>
		</nav>
	</section>
</template>
