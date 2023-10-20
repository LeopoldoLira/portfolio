/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			animation:{
				'spin-slow':'spin 10s linear infinite'
			},
			gridTemplateRows:{
				'layout':'repeat(6,17.5rem)',
				'tabletlayout':'repeat(11,20rem)',
				'mobilelargelayout':'repeat(11, 11.5rem)',
				'smallLaptop':'repeat(6,15rem)',
				'4k':'repeat(6,30rem)'
			}
		},

		screens:{
			'4k':{'min':'2560px'},
			'smallLaptop':{'max':'1024px'},
			'tablet':{'max':'768px'},
			'mobile-l':{'max':'425px'}
		}
	},
	plugins: [],
}
