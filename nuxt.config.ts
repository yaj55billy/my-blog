// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			disqusShortname: "",
		},
	},
	devtools: { enabled: true },
	css: ["@/assets/main.sass"],
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@nuxt/content",
		"nuxt-icon",
	],
	plugins: ["~/plugins/disqus.js"],
	content: {
		highlight: {
			theme: {
				default: "one-dark-pro",
				dark: "one-dark-pro",
			},
		},
	},
	colorMode: {
		classSuffix: "",
	},
	app: {
		// baseURL: process.env.NODE_ENV === "production" ? "/" : "/",
		head: {
			viewport:
				"width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0",
			title: "",
			meta: [
				{ charset: "utf-8" },
				{ name: "format-detection", content: "telephone=no" },
				{
					name: "description",
					content: "",
				},
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: "" },
				{ property: "og:title", content: "" },
				{
					property: "og:description",
					content: "",
				},
				{ property: "og:image", content: "" },
				{ property: "og:url", content: "" },
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC:wght@300;400;700&family=Noto+Sans+TC:wght@100;400;700&display=swap",
				},
			],
		},
	},
});
