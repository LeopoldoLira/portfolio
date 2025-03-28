/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		screens:{

			'mobile':{'min':'1px', 'max':'425px'},
			'tablet':{'min':'426px', 'max':'768px'},
			'sm-laptop':{'min':'769px','max':'1024px'},
			'laptop':{'min':'1025px', 'max':'1440px'},
			'monitor':{'min':'1441px'},
		}
	},
	plugins: [],
}
