/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		backdropBlur: {
		  'sm': '4px',
		  'md': '8px',
		  'lg': '12px',
		  'xl': '16px',
		},
		// Puedes extender otros temas aquí si es necesario
	  },
	},
	plugins: [],
  }
  