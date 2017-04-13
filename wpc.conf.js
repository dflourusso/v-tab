module.exports = ({argv}) => ({
  output: {
    library: 'VTab',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  entry: {
    "v-tab": "./src/index.js"
  },
  externals: ['vue', 'vuex', 'string-mask', 'fecha']
})
