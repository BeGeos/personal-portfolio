/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "var(--clr-bg-primary)",
				"primary-200": "var(--clr-text-primary-200)",
				"primary-300": "var(--clr-text-primary-300)",
				"primary-500": "var(--clr-text-primary-500)",
				"primary-highlight": "var(--clr-bg-primary-highlight)",
				"secondary": "var(--clr-bg-secondary)",
				"accent-muted": "var(--clr-bg-accent-muted)",
				"accent": "var(--clr-text-accent)",
				"danger": "var(--clr-text-danger)",
			  },
		},
	},
	plugins: [],
}
