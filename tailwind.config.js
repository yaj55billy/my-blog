module.exports = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#dee2e6", // normal and text
				secondary: "#ffffff", // title
				emphasis: "rgba(260, 142, 128, 1)", // 強調色
				bg: "rgba(0, 10, 20, 1)",
				cardBg: "#1f2937",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.primary"),
						a: {
							color: theme("colors.primary"),
							textDecoration: "underline",
							textDecorationStyle: "dashed",
							textUnderlineOffset: "6px",
							fontWeight: "normal",
							"&:hover": {
								color: theme("colors.emphasis"),
							},
						},
						h1: {
							color: theme("colors.secondary"),
							fontWeight: "bold",
							fontSize: theme("fontSize.4xl"),
							a: {
								textDecoration: "none",
								color: theme("colors.secondary"),
								fontWeight: "bold",
							},
						},
						h2: {
							color: theme("colors.secondary"),
							fontWeight: "bold",
							fontSize: theme("fontSize.3xl"),
							a: {
								textDecoration: "none",
								color: theme("colors.secondary"),
								fontWeight: "bold",
							},
						},
						h3: {
							color: theme("colors.secondary"),
							fontWeight: "bold",
							fontSize: theme("fontSize.2xl"),
							a: {
								textDecoration: "none",
								color: theme("colors.secondary"),
								fontWeight: "bold",
							},
						},
						h4: {
							color: theme("colors.secondary"),
							fontWeight: "bold",
							fontSize: theme("fontSize.xl"),
							a: {
								textDecoration: "none",
								color: theme("colors.secondary"),
								fontWeight: "bold",
							},
						},
						p: {
							color: theme("colors.primary"),
							fontWeight: "normal",
							fontSize: theme("fontSize.base"),
							marginTop: "1.25rem",
							marginBottom: "0rem",
						},
						strong: {
							color: theme("colors.primary"),
							fontWeight: "bold",
							borderBottomWidth: "2px",
							borderBottomColor: theme("colors.emphasis"),
						},
						ul: {
							marginTop: ".75rem",
							"li::marker": {
								color: theme("colors.primary"),
							},
						},
						ol: {
							marginTop: ".75rem",
							"li::marker": {
								color: theme("colors.primary"),
							},
						},
						li: {
							margin: ".25rem 0",
						},
						code: {
							wordWrap: "break-word",
							padding: ".2rem .3rem",
							borderRadius: ".3rem",
							backgroundColor: theme("colors.cardBg"),
							color: theme("colors.emphasis"),
						},
						hr: {
							margin: "3rem auto",
							border: "1px dashed theme('colors.gray.500')",
							width: "33.333%",
						},
						th: {
							border: 'solid 1px theme("colors.primary")',
							padding: ".5rem",
							textAlign: "center",
							fontWeight: "bold",
							color: theme("colors.secondary"),
						},
						td: {
							border: 'solid 1px theme("colors.primary")',
							padding: ".5rem",
						},
						blockquote: {
							display: "block",
							borderLeft: '.5rem solid theme("colors.emphasis")',
							backgroundColor: theme("colors.cardBg"),
							padding: ".75rem 1rem",
							margin: "1.25rem 0",
							p: {
								marginTop: "0rem",
							},
						},
						iframe: {
							display: "block",
							margin: "0 auto",
						},
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
