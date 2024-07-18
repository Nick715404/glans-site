import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brld-reg': ['Berold', 'Helvetica', 'Arial', 'sans-serif',],
        'brld-stl': ['Berold-Stylistic', 'Helvetica', 'Arial', 'sans-serif',],
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1305px',
        }
      },
      colors: {
        accent: "#AB93B9"
      },
      fontSize: {
        "4xl": "35px",
        "10xl": "100px"
      },
      lineHeight: {
        normal: "100%"
      }
    },
    screens: {
      '2xl': {'max': '1681px'},
      'xl': {'max': '1441px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '375px'},
    }
  },
  plugins: [],
};
export default config;
