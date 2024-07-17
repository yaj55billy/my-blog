// prose-blockquote:{utility}	blockquote
// prose-figure:{utility}	figure
// prose-figcaption:{utility}	figcaption
// prose-strong:{utility}	strong
// prose-code:{utility}	code
// prose-pre:{utility}	pre
// prose-ol:{utility}	ol
// prose-ul:{utility}	ul
// prose-li:{utility}	li
// prose-table:{utility}	table
// prose-thead:{utility}	thead
// prose-tr:{utility}	tr
// prose-th:{utility}	th
// prose-td:{utility}	td
// prose-img:{utility}	img
// prose-video:{utility}	video
// prose-hr:{utility}	hr
module.exports = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#dee2e6", // normal and text
				secondary: "#ffffff", // title
				emphasis: "#f08e80", // 強調色
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.primary"),
						a: {
							color: theme("colors.primary"),
							"&:hover": {
								color: theme("colors.emphasis"),
							},
							textDecoration: "underline",
							textDecorationStyle: "dashed",
							textUnderlineOffset: "6px",
							fontWeight: "normal",
						},
						h1: {
							color: theme("colors.secondary"),
							fontWeight: "bold",
							fontSize: theme("fontSize.4xl"),
							a: {
								textDecoration: "none",
							},
						},
						h2: {
							color: theme("colors.secondary"),
							fontWeight: "bold",
							fontSize: theme("fontSize.3xl"),
							a: {
								textDecoration: "none",
							},
						},
						h3: {
							color: theme("colors.secondary"),
							fontWeight: "bold",
							fontSize: theme("fontSize.2xl"),
							a: {
								textDecoration: "none",
							},
						},
						h4: {
							color: theme("colors.secondary"),
							fontWeight: "bold",
							fontSize: theme("fontSize.xl"),
							a: {
								textDecoration: "none",
							},
						},
						p: {
							color: theme("colors.primary"),
							fontWeight: "normal",
							fontSize: theme("fontSize.base"),
						},
						// pre: {
						// 	backgroundColor: theme("colors.gray.100"),
						// 	color: theme("colors.gray.700"),
						// },
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
