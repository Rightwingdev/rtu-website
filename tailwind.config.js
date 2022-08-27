module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      width: {
        'wide': '1920px',
      },
      colors: {
        'red': '#E2001A',
        'black': '#121221',
        'white': '#FFFEFE',
        'text-white': '#FFFFFF',
      },
      fontFamily: {
        'roboto': 'Switzer, sans-serif',
        'blog': 'Lato, sans-serif',

      },
      height: {
        'main': '25rem',
        'aboutHeader':'32rem'
      },
      fontSize:{
        '10xl':'10rem'
      }
    },
  },
  plugins: [],
}