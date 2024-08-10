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
	title: "筆力 - 探索與記錄的產地（所有文章）",
	meta: [
		{ name: "title", content: "筆力 - 探索與記錄的產地（所有文章）" },
		{
			name: "description",
			content:
				"分享的內容，像是在這疑難雜症的經驗中所帶來的體悟，以及所做的一些學習心得。最近在研究習慣、心念、大腦等等相關領域，也有閱讀一些身心靈書籍跟阿育吠陀等知識。如果這些分享能為你帶來一些小小心得，也歡迎給我一些回饋。",
		},
		{ property: "og:title", content: "筆力 - 探索與記錄的產地" },
		{
			property: "og:description",
			content:
				"分享的內容，像是在這疑難雜症的經驗中所帶來的體悟，以及所做的一些學習心得。最近在研究習慣、心念、大腦等等相關領域，也有閱讀一些身心靈書籍跟阿育吠陀等知識。如果這些分享能為你帶來一些小小心得，也歡迎給我一些回饋。",
		},
		{ property: "og:image", content: "/images/meta-logo.png" },
		{ property: "og:url", content: "https://www.billyji.com/" },
		{
			name: "twitter:title",
			content: "筆力 - 探索與記錄的產地",
		},
		{
			name: "twitter:description",
			content:
				"分享的內容，像是在這疑難雜症的經驗中所帶來的體悟，以及所做的一些學習心得。最近在研究習慣、心念、大腦等等相關領域，也有閱讀一些身心靈書籍跟阿育吠陀等知識。如果這些分享能為你帶來一些小小心得，也歡迎給我一些回饋。",
		},
		{ name: "twitter:image", content: "/images/meta-logo.png" },
		{
			name: "twitter:creator",
			content: "筆力",
		},
	],
});
</script>

<template>
	<main>
		<section class="grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1">
			<Card :currentPageData="currentPageData"></Card>
		</section>
		<section>
			<nav aria-label="Page navigation" class="flex justify-center mt-6 px-6">
				<ul
					class="flex flex-wrap items-center justify-center space-x-2 text-base"
				>
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
	</main>
</template>
