/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('./assets/bgimage.jpg')", 
        'guide-todo': "url('./assets/guide.jpg')",
        'guide-todo2': "url('./assets/guide2.jpg')"
      },
      backgroundSize: {
        'contain': 'contain', 
        'cover': 'cover',    
      },
      backgroundPosition: {
        'center': 'center', 
        'top': 'top',         
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'background-color, color, border-color, text-decoration-color, fill, stroke',
        'shadow': 'box-shadow', 
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      boxShadow: {
        'checked': '0 0 15px 3px rgba(34, 197, 94, 0.8)', 
        'unchecked': '0 0 10px 2px rgba(239, 68, 68, 0.8)', 
      },
      scale: {
        'checked': '1.2', 
        'hover': '1.05', 
      },
      colors: {
        checked: '#22C55E', 
        unchecked: '#EF4444', 
        'hover-primary': '#3B82F6', 
        'custom-green': '#4caf50', 
        'custom-orange': '#ff9800', 
        'custom-purple': '#9c27b0',
      },
    },
  },
  plugins: [],
}
