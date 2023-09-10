/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			green: colors.emerald,
			purple: colors.purple,
			yellow: colors.amber,
			pink: colors.fuchsia,
			...colors,
		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
	darkMode: 'class',
};
