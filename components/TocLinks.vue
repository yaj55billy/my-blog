<script setup>
const props = defineProps({
	links: Array,
});

function scrollTo(id) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}
</script>

<template>
	<ul class="mt-4 pl-6">
		<li v-for="link in props.links" :key="link.id" class="list-disc">
			<a href="javascript:;" @click.prevent="scrollTo(link.id)">
				{{ link.text }}
			</a>
			<ul class="mt-0 pl-4" v-if="link.children">
				<li
					v-for="innerLink in link.children"
					:key="innerLink.id"
					class="list-disc"
				>
					<a href="javascript:;" @click.prevent="scrollTo(innerLink.id)">
						{{ innerLink.text }}
					</a>
				</li>
			</ul>
		</li>
	</ul>
</template>
