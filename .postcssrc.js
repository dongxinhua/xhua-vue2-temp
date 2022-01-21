const path = require('path')

module.exports = ({ webpack }) => {
  const designWidth = webpack.resourcePath.includes(
    path.join('node_modules', 'vant')
  )
    ? 375
    : 750
  return {
    plugins: {
      autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
      'postcss-px-to-viewport': {
        unitToConvert: 'px', // 要转化的单位
        viewportWidth: designWidth, // UI设计稿的宽度
        unitPrecision: 3, // 转换后的精度，即小数点位数
        propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: [
          // 指定不转换为视窗单位的类名
          '.mint',
          '.pad_box',
          '.pad_question_left',
          '.pad_question_right',
          '.pad_spaceBox',
          '.pad_text_box',
          '.pad_option',
          '.pad_topic',
          '.pad_font_24',
          '.pad_ul',
          '.pad_analysis_list',
        ],
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        // replace: true, // 是否转换后直接更换属性值
        // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        // landscape: false // 是否处理横屏情况
      },
    },
  }
}
