<script setup>
const props = defineProps({
	currentPageData: {
		type: Array,
	},
});
</script>

<template>
	<div
		v-for="post in props.currentPageData"
		:key="post.path"
		class="card-bg relative p-6 rounded-xl flex flex-wrap flex-col group"
	>
		<div class="w-full h-56 rounded-md overflow-hidden">
			<img
				:src="post?.image.src"
				:alt="post?.image.alt"
				class="block w-full h-full object-cover object-center transition-transform origin-center duration-700 group-hover:scale-105"
			/>
		</div>
		<h3 class="group-hover:text-emphasis mt-5">{{ post.title }}</h3>
		<p class="mt-4">{{ post.description }}</p>
		<div class="">
			<div class="mt-4 flex flex-wrap items-center">
				<Icon name="mdi:label" class="text-third text-xl mr-1" />
				<template v-for="(category, index) in post.categories" :key="category">
					<span class="text-sm text-third"
						>{{ category
						}}{{ post?.categories.length - 1 === index ? "" : "、" }}</span
					>
				</template>
			</div>
			<p class="mt-1 text-sm text-third flex items-center">
				<Icon
					name="mdi:calendar-month-outline"
					class="text-third text-xl mr-1"
				/>

				{{ post.date }}
			</p>
		</div>

		<NuxtLink
			:to="post.path"
			class="absolute top-0 left-0 z-10 w-full h-full"
		></NuxtLink>
	</div>
</template>
