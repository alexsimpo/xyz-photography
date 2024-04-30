import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%',
      },
      padding: { DEFAULT: '1rem' },
    },
    fontFamily: {
      sans: ['var(--font-tungsten)', 'Helvetica', 'Arial', 'sans-serif'],
      system: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
}
export default config
