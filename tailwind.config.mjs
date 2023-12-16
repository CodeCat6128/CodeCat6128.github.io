/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': {
				100: '#ffffff',
				200: '#f7f7f7',
			},
			'gray': {
				100: '#e6e6e6',
				200: '#979797',
				300: '#484848',
			},
			'black': '#191919',
		},
		spacing: {
			'0': '0px',
			'1': '4px',
			'2': '8px',
			'3': '10px',
			'4': '12px',
			'5': '16px',
			'6': '20px',
			'7': '24px',
			'8': '32px',
			'9': '40px',
			'10': '45px',
			'11': '50px',
			'12': '60px',
			'13': '120px',
			'14': '100px',
		},
		fontFamily: {
			'inter': ['"Inter"', '"sans-serif"'],
		},
		fontSize: {
			'h1': ['64px', {lineHeight: '100%', fontWeight: '600', letterSpacing: '-3.2px'}],
			'h2': ['40px', {lineHeight: '100%', fontWeight: '600', letterSpacing: '-2.6px'}],
			'h3': ['32px', {lineHeight: '100%', fontWeight: '600', letterSpacing: '-1.6px'}],
			'h4': ['24px', {lineHeight: '100%', fontWeight: '600', letterSpacing: '-1.2px'}],
			'h5': ['20px', {lineHeight: '140%', fontWeight: '600', letterSpacing: '-1px'}],
			'h6': ['14px', {lineHeight: '100%', fontWeight: '600', letterSpacing: '-0.7px'}],
			'pl': ['20px', {lineHeight: '140%', fontWeight: '400', letterSpacing: '-1px'}],
			'pm': ['16px', {lineHeight: '130%', fontWeight: '400', letterSpacing: '-0.8px'}],
			'pn': ['14px', {lineHeight: '130%', fontWeight: '400', letterSpacing: '-0.7px'}],
			'ps': ['12px', {lineHeight: '130%', fontWeight: '400', letterSpacing: '-0.6px'}],
			'pb': ['16px', {lineHeight: '100%', fontWeight: '400', letterSpacing: '-0.8px'}],
			'mh1': ['36px', {lineHeight: '100%', fontWeight: '400', letterSpacing: '-1.8px'}],
			'mh2': ['32px', {lineHeight: '100%', fontWeight: '600', letterSpacing: '-1.6px'}],
		},
		screens: {
			'sm': '560px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		backgroundSize: {
			'auto': 'auto',
			'cover': 'cover',
			'contain': 'contain',
			'100%': '100%',
			'105%': '105%',
			'150%': '150%',
			'155%': '155%',
			'180%': '180%',
			'185%': '185%',
		},
		extend: {
			lineHeight: {
				'snug': '140%',
			}
		},
	},
	plugins: [],
}
