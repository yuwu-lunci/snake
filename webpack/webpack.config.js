//引入一个包
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中所有配置信息都应写在module.exports
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",

  //指定打包目录
  output: {
    //指定打包文件目录
    path: path.resolve(__dirname, "dist"),

    //打包后文件
    filename: "bundle.js",
  },

  mode: "development", // 设置mode

  //指定webpack打包使用模块
  module: {
    //指定加载规则
    rules: [
      {
        //test指定规则生效文件
        test: /\.ts$/,
        use: "ts-loader",
        //指定要排除文件
        exclude: /node_modules/,
      },
    ],
  },
  //配置webpack插件
  plugins: [
    //自动生成html文件
    new HtmlWebpackPlugin({
      //   title: "自定义title",
      template: "./src/index.html",
    }),

    //清除原来生成的文件，
    new CleanWebpackPlugin(),
  ],

  //设置引入模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
