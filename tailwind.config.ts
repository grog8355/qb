import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'Inter': ['inter'],
      },
      boxShadow:
      {
        'full': ['0px 0px 7px rgba(0, 0, 0)'],
        'med': ['0px 0px 4px rgba(0, 0, 0, 0.600)'],
        'light': ['0px 0px 4px rgba(0, 0, 0, 0.200)']
      }
    }
  },

  plugins: []
} satisfies Config;
