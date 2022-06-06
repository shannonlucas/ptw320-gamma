const plugins = [
  require('postcss-import'),
  require('tailwindcss/nesting')(),
  require('tailwindcss')({ config: './config/tailwind.config.cjs' }),
  require('autoprefixer'),
]

const prodPlugins = [require('cssnano')({ preset: 'advanced' })]

if (process.env.NODE_ENV === 'production') {
  plugins.concat(prodPlugins)
}

module.exports = {
  plugins,
}
