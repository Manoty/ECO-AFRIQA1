module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your React components
    './public/index.html', // Include your index.html
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: { 
      backgroundImage: theme => ({
        'hero-about': "url('/public/static/media/aboutHero.png')",
        'hero-products':"url('/public/static/media/productsHero.png')",
        'hero-gif':"url('/public/static/media/heroGIF.gif')",
        "hero-gardenSetup":"url('/public/static/media/gardenSetups.png')",
      }),
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },

      animation: {
        slideIn: 'slideIn 0.3s ease-out forwards',
        slideOut: 'slideOut 0.3s ease-in forwards',
      },

      textShadow: {
        'custom': '2px 2px 2px rgba(0, 0, 0, 0.5)',
      },


      },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-textshadow'),
  ],
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight reset
  },
};