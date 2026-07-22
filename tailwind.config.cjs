/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			// Standard mobile-first breakpoints
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			// Tokens are defined once in src/styles/global.css (OKLCH) and
			// referenced here so there is a single source of truth.
			colors: {
				background: 'var(--color-background)',
				surface: 'var(--color-surface)',
				'surface-2': 'var(--color-surface-2)',
				border: 'var(--color-border)',
				'border-strong': 'var(--color-border-strong)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
				accent: 'var(--color-accent)',
				'accent-bright': 'var(--color-accent-bright)',
				'accent-soft': 'var(--color-accent-soft)',
				'accent-line': 'var(--color-accent-line)',
			},
			spacing: {
				xs: '0.5rem',   //  8px
				sm: '1rem',     // 16px
				md: '1.5rem',   // 24px
				lg: '2.5rem',   // 40px
				xl: '4rem',     // 64px
				'2xl': '6rem',  // 96px
			},
			fontFamily: {
				display: ['"Martian Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
				mono: ['"Martian Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
				sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			zIndex: {
				nav: '40',
				overlay: '60',
				palette: '80',
			},
		},
	},
	plugins: [],
}
