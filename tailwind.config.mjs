/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		spacing: {
			'1': '4px',
			'2': '8px',
			'3': '12px',
			'4': '16px',
			'5': '24px',
			'6': '32px',
			'7': '48px',
			'8': '64px',
			'9': '128px',
		},
		screens: {
			'mc': '372px',
			'sm': '452px',
			'nm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			boxShadow: {
				's': '6px 6px 11px #d4d5d5, -6px -6px 11px #ffffff',
				'm': '9px 9px 13px #d4d5d5, -9px -9px 13px #ffffff',
				'l': '15px 15px 15px #d4d5d5, -15px -15px513px #ffffff',
				'default': '0px 0px 90px #d4d5d5',
				'bottom': '0px 45px 50px -45px #d4d5d5',
			}
		}
	}
}
