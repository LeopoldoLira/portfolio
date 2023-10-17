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
				'smlayout':'repeat(6,20rem)'
			}
		},

		screens:{
			'tablet':{'max':'768px'}
		}
	},
	plugins: [],
}
