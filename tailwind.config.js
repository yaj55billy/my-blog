module.exports = {
	darkMode: "class",
	theme: {
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
		extend: {
			colors: {
				primary: "#dee2e6", // normal and text
				secondary: "#ffffff", // title
				third: "#9ca3af",
				emphasis: "rgba(260, 142, 128, 1)", // 強調色
				bg: "rgba(0, 10, 20, 1)",
				cardBg: "rgba(44, 55, 67, 1)",
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
						img: {
							display: "block",
							margin: "0 auto",
						},
					},
				},
				sm: {
					css: {
						fontSize: "0.875rem",
						lineHeight: "1.25rem",
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
