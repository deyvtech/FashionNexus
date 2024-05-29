const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
			inter: ["'Inter'", "sans-serif"],
      "exo-2": ["'Exo 2'", "sans-serif"],
      "oswald": ["'Oswald'", "sans-serif"],
      "poppins": ["'Poppins'", "sans-serif"]
		},
    extend: {
      colors: {
        fnAccent: {
          100: "#1A1210",
          200: "#201512",
          300: "#3C150B",
          400: "#530F00",
          500: "#641501",
          600: "#74230F",
          700: "#8D331E",
          800: "#B64328",
          900: "#FC4100",
          950: "#E73C00",
          960: "#FF906F",
          970: "#FFD1C5",
        },
        fnDark: '#141414'
      },
      backgroundImage: {
        'gradient-to-t': "linear-gradient(to right top, #000000, #080505, #100a0a, #160e0d, #1a1210);"
      }
    },
  },
	darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        "orange-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#141414",
            foreground: "#ffffff",
            primary: {
              100: "#1A1210",
              200: "#201512",
              300: "#3C150B",
              400: "#530F00",
              500: "#641501",
              600: "#74230F",
              700: "#8D331E",
              800: "#B64328",
              900: "#FC4100",
              DEFAULT: "#FC4100",
              foreground: "#ffffff",
            },
            focus: "#74230F",
          },
        },
      },
    }
  )],
}