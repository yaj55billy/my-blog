<template>
	<article class="prose max-w-none sm:prose-sm">
		<ContentDoc v-slot="{ doc }">
			<div class="text-center mb-12 lg:mb-6">
				<h1 class="mb-0">{{ doc.title }}</h1>
				<p class="mt-3 text-base text-third flex items-center justify-center">
					<Icon
						name="mdi:calendar-month-outline"
						class="text-third text-xl mr-1"
					/>

					{{ doc.date }}
				</p>
			</div>

			<div class="grid grid-cols-12 gap-10 lg:gap-6">
				<section
					:class="{ 'col-span-9': doc.toc, 'col-span-12': !doc.toc }"
					class="bg-cardBg p-10 rounded-xl lg:p-6 lg:col-span-12"
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
				<section
					class="col-span-3 not-prose lg:col-span-12 lg:order-first"
					v-if="doc.toc"
				>
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
