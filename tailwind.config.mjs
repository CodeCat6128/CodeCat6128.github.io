/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'mc': '372px',
			'sm': '452px',
			'nmx': '500px',
			'nm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		colors: {
			'white': '#ffffff',
			'black': '#000000',
			'neutral': '#404040',
			'error': '#ef4444',
			'zinc': {
				100: '#f4f4f5',
				200: '#e4e4e7',
				300: '#d4d4d8',
				500: '#71717a',
				800: '#27272a',
			},
		}
	}
}
