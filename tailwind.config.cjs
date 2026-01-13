/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
    theme: {
      extend: {
        colors: {
          spruce: '#0F4C3A',     // header / primary
          cream:  '#F2EEE7',     // page background + sections
          gold:   '#B08A3F',     // CTA
          gold2:  '#9C7A33',     // CTA hover
          ink:    '#1C1C1C',     // body text
          overlay:'#0B1F1A',     // hero dark overlay (used with /60)
        },
        fontFamily: {
          heading: ['Playfair Display', 'serif'],
          body: ['Inter', 'system-ui', 'sans-serif'],
        },
        boxShadow: {
          header: '0 2px 0 rgba(0,0,0,0.08)',
        }
      },
    },
    plugins: [],
  };  