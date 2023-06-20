/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

// for flip animation
const plugin = require("tailwindcss/plugin");
const Myclass = plugin(function({ addUtilities }){
  addUtilities ({
    ".my-rotate-y-180":{
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle:"preserve-3d",
    },
    ".perspective":{
      perspective:"1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden",
      
    },

    
    
    
  })
})



const {fontFamily} = require('tailwindcss/defaultTheme')


module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      }

      
    },
  },
  plugins: [
    
    require('tailwindcss'),
    require('autoprefixer'),
    Myclass,
    //  require('@tailwindcss/aspect-ratio'),
    // require('preline/plugin'),
  ],
}) 

