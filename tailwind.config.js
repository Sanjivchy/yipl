module.exports = {
  purge: [

    './src/**/*.html',

    './src/**/*.js',

  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor:{
        skin:{
          base:'var(--color-text-base)',
          muted:'var( --color-text-muted)',
          header:'var(--color-text-header)',
          darkmode:'var(--color-text-darkmode)',
          link:'var(--color-text-link)'
        }
      },
      backgroundColor:{
        skin:{
          primaryFill:'var(--color-primaryfill)',
          secondaryFill:'var(--color-secondaryfill)',
          darkFill:'var(--color-darkfill)',
          secondarybtn:'var(--color--secondarybtn)'
        }
      }, 
      fontFamily:{
        poppins:['Poppins'],
        roboto:['Roboto']
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
