/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'), require('flowbite/plugin')
  ],
  content: [
    './node_modules/xtendui/src/*.mjs',
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
        serif: ['Lora', 'serif']
      },
      colors: {
        'primary': {
          '50': '#eefee7',
          '100': '#d8fccb',
          '200': '#b4f99d',
          '300': '#85f264',
          '400': '#5de637',
          '500': '#3acc16',
          '600': '#28a30d',
          '700': '#217c0f',
          '800': '#1f6212',
          '900': '#1d5314',
          },
          'secondary': {
          '50': '#fcf4ff',
          '100': '#f8e9fe',
          '200': '#f0d2fc',
          '300': '#e7aef9',
          '400': '#da7ef4',
          '500': '#c037e6',
          '600': '#ad2ccd',
          '700': '#9122a9',
          '800': '#781d8b',
          '900': '#661d72',
          },          
        }
    },
  },
  plugins: [],
}
