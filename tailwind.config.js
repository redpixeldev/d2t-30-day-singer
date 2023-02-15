/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlywhenSupported: true,
	},
	content: ["./src/**/*.{html,njk,md}"],
	theme: {
		fontFamily: {
			body: ["Switzer", "sans-serif"],
			header: ["Oswald", "sans-serif"],
		},

		container: {
			center: true,
			padding: "1rem",
		},

		extend: {
			colors: {
				brand: {
					primary: "#3399FF",
					black: "#20252B",
					gray: {
						darker: "#40444a",
						dark: "#767676",
						lighter: "#F6F6F6",
						light: "#E2E2E2",
					},
					vibrant: {
						yellow: "#FFD000",
						green: "#5DB77A",
						red: "#FF0000",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
	],
};
