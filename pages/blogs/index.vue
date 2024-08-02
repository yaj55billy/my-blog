<script setup>
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
	// console.log(pageIndex.value);
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
	// titleTemplate: 'Riyad\'s Blog - %s',
});
</script>

<template>
	<section>
		<ul class="grid grid-cols-2 gap-6">
			<li
				v-for="post in currentPageData"
				:key="post.path"
				class="card-bg relative p-5 rounded-xl flex flex-wrap flex-col group"
			>
				<div class="w-full h-64 rounded-md overflow-hidden">
					<img
						:src="post?.image.src"
						:alt="post?.image.alt"
						class="block w-full h-full object-cover object-center transition-transform origin-center duration-700 group-hover:scale-105"
					/>
				</div>
				<h3 class="group-hover:text-emphasis mt-5">{{ post.title }}</h3>
				<p class="mt-4">{{ post.description }}</p>
				<div class="">
					<ul class="mt-4 flex flex-wrap">
						<li
							v-for="category in post.categories"
							:key="category"
							class="text-sm"
						>
							{{ category }},
						</li>
					</ul>
					<p class="mt-0">{{ post.date }}</p>
				</div>

				<NuxtLink
					:to="post.path"
					class="absolute top-0 left-0 w-full h-full"
				></NuxtLink>
			</li>
		</ul>
	</section>
	<section>
		<button
			type="button"
			@click="handlePageClick(-1)"
			:disabled="pageIndex === 0"
		>
			上一頁
		</button>
		<ul>
			<li
				v-for="(page, index) in totalPage"
				:key="page + index"
				:class="{ active: index === pageIndex }"
			>
				<button type="button" @click="pageIndex = page - 1">{{ page }}</button>
			</li>
		</ul>
		<button
			type="button"
			@click="handlePageClick(1)"
			:disabled="pageIndex === totalPage - 1"
		>
			下一頁
		</button>
	</section>
</template>

<style scoped lang="scss">
// .active {
// 	font-weight: 700;
// 	font-size: 1.25rem;
// }
// .card {
// 	display: flex;
// 	flex-wrap: wrap;
// 	margin-top: 100px;

// 	&__list {
// 		width: 30%;
// 		margin: 20px 1%;
// 		min-height: 300px;
// 		list-style: none;
// 		padding: 0.5rem 1rem;
// 		color: rgba(255, 255, 255, 1);

// 		background-color: rgba(21, 38, 58, 0.7);
// 		cursor: pointer;
// 		a:hover {
// 			color: #f08e80;
// 		}
// 	}
// }
</style>
