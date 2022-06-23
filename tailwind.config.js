module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'glass-white': 'rgba(255,255,255,0.25)'
      },
      boxShadow:{
        'glass' : '0 8px 32px 0 rgba(0,0,0,0.3)'
      },
      backgroundImage:{
        'hero-image': "url('/src/assets/test.jpg')"
      }
    },
  },
  plugins: [],
}
