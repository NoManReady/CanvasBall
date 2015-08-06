# CanvasBall
>##使用方法
>1.clone项目到本地，如需修改则需安装package.json里面的依赖包，然后启动gulpfile.js(在根目录运行dos命令:gulp [default])，之后在浏览器上访问[start link](http://localhost:3000/proj/index.html)。
>
>2.CanvasBall插件调用方式：获取canvas的jQuery对象，然后调用CanvasBall([options])方法，该方法会返回jQuery对象并具有3个方法与ctx画布对象(toggleAnimate、toggleSize、toggleSpeed、paint)。
>
>3.CanvasBall([options])方法可以传入自定义的参数：BALL_SIZE初始化球的个数、BALL_INPACT最大碰撞次数、BALL_RADIUS球最大半径、PARENT_CONTAINER画布容器、DYNAMIC_BALL是否动态启用、BALL_SIZE_DYNAMIC球的大小是否可变、BALL_SPEED球移动的速度。
>

>##文档结构
>demo写在proj目录，目录下有index.html运行文件，js文件夹(插件代码未压缩版)，dist文件夹(插件代码压缩版)。
>
>gulpfile.js为示例构建工具，package.json文件为构建工具所依赖的包管理。
