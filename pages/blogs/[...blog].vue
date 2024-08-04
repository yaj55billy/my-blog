<template>
	<article class="prose max-w-none">
		<ContentDoc v-slot="{ doc }">
			<div class="grid grid-cols-12 gap-10">
				<section
					:class="{ 'col-span-9': doc.toc, 'col-span-12': !doc.toc }"
					class="bg-cardBg py-6 px-12 rounded-xl"
				>
					<ContentRenderer :value="doc" />
				</section>
				<section class="col-span-3 not-prose" v-if="doc.toc">
					<aside class="sticky top-8">
						<nav class="bg-cardBg p-6 rounded-xl">
							<h4 class="text-center">-- 內容目錄 --</h4>
							<TocLinks :links="doc.body.toc.links" />
						</nav>
					</aside>
				</section>
			</div>
		</ContentDoc>
	</article>
</template>

<script setup>
// const activeId = ref(null);
// onMounted(() => {
// 	const callback = (entries) => {
// 		console.log(entries);
// 		for (const entry of entries) {
// 			if (entry.isIntersecting) {
// 				activeId.value = entry.target.id;
// 				break;
// 			}
// 		}
// 	};

// 	const observer = new IntersectionObserver(callback, {
// 		root: null,
// 		threshold: 0.5,
// 	});
// 	const elements = document.querySelectorAll("h2, h3");

// 	for (const element of elements) {
// 		observer.observe(element);
// 	}

// 	onBeforeUnmount(() => {
// 		for (const element of elements) {
// 			observer.unobserve(element);
// 		}
// 	});
// });
</script>
