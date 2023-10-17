/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			animation:{
				'spin-slow':'spin 10s linear infinite'
			},
			gridTemplateRows:{
				'layout':'20rem 20rem 20rem 20rem',
				'tabletlayout':'repeat(6,20rem)',
				'mobilelargelayout':'repeat(6, 11.5rem)'
			}
		},

		screens:{
			'tablet':{'max':'768px'},
			'mobile-l':{'max':'425px'}
		}
	},
	plugins: [],
}
