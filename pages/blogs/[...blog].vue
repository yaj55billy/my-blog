<template>
	<article class="prose max-w-none">
		<ContentDoc v-slot="{ doc }">
			<div class="grid grid-cols-12 gap-10">
				<section
					:class="{ 'col-span-9': doc.toc, 'col-span-12': !doc.toc }"
					class="bg-cardBg p-10 rounded-xl"
				>
					<ContentRenderer :value="doc" />

					<ClientOnly>
						<div class="comments mt-12">
							<Disqus
								:shortname="disqusShortname"
								:identifier="disqusIdentifier"
							></Disqus>
						</div>
					</ClientOnly>
				</section>
				<section class="col-span-3 not-prose" v-if="doc.toc">
					<aside class="sticky top-8">
						<nav class="bg-cardBg p-5 rounded-xl">
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
const route = useRoute();
const disqusShortname = ref("");
const disqusIdentifier = ref("");

const config = useRuntimeConfig();

onMounted(() => {
	disqusShortname.value = config.public.disqusShortname;
	disqusIdentifier.value = route.path;
});
</script>
