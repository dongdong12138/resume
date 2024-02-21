// 引入 css 目录下的 scss 文件
importAll(require.context('./css/', true, /\.scss$/))

// 引入 images 目录下的所有图片
importAll(require.context('./images/', true, /\.(png|jpe?g|gif|webp)$/))

function importAll(r) {
  r.keys().forEach(r)
}
