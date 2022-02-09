module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'pix': ['"Press Start 2P"', 'cursive'],
    },
    extend: {
      colors: {
        'dark-gray': '#242424',
        'med-gray': '#aaaaaa',
        'light-gray': '#cccccc',
        'dark-blue': '#005555',
        'med-blue': '#008888',
        'light-blue': '#55bbbb',
        'dark-red': '#aa0000',
        'med-red': '#bb5555',
        'light-red': '#cc9999',
        'dark-purple': '#770077',
        'med-purple': '#aa00aa',
        'light-purple': '#cc22cc',
        'wash-purple': '#cc88aa',
        'dark-green': '#008800',
        'med-green': '#00aa00',
        'light-green': '#55cc55',
        'wash-green': '#cccc88',
      }
    },
  },
  plugins: [],
}