const headlessuiPlugin = require('@headlessui/tailwindcss')
const formsPlugin = require('@tailwindcss/forms')

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter, sans-serif', { fontFeatureSettings: '"cv11"' }],
      },
    },
  },
  plugins: [headlessuiPlugin, formsPlugin],
}
/** @type {import('tailwindcss').Config} */
module.exports = config