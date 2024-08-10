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
			title: "筆力 - 探索與記錄的產地",
			meta: [
				{ charset: "utf-8" },
				{ name: "format-detection", content: "telephone=no" },
				{
					name: "description",
					content:
						"分享的內容，像是在這疑難雜症的經驗中所帶來的體悟，以及所做的一些學習心得。最近在研究習慣、心念、大腦等等相關領域，也有閱讀一些身心靈書籍跟阿育吠陀等知識。如果這些分享能為你帶來一些小小心得，也歡迎給我一些回饋。",
				},
				{
					name: "robots",
					content: "index, follow",
				},
				{
					name: "author",
					content: "筆力",
				},
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: "筆力 - 探索與記錄的產地" },
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
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC:wght@300;400;700&family=Noto+Sans+TC:wght@100;400;700&display=swap",
				},
			],
		},
		pageTransition: { name: "page", mode: "out-in" },
		layoutTransition: { name: "layout", mode: "out-in" },
	},
});
