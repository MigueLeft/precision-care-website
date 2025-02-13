const {heroui} = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			colors:{
				'main': '#001d4a'
			}
		},
	},
	darkMode: "class",
	plugins: [require('daisyui'), heroui()],
}
