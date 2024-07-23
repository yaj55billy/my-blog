// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["@/assets/main.sass"],
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
	content: {
		highlight: {
			theme: {
				default: "github-light",
				dark: "github-dark",
			},
		},
	},
	colorMode: {
		classSuffix: "",
	},
});
