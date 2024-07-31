import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  typescript: true,
})
