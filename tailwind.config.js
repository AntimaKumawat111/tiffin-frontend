module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Add this line
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
