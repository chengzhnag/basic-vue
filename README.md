# basic-vue

> 该项目适用于差异化项目的开发, 是一套通过vue-cli3创建的模板代码, 添加了一些个人常用的东西

1. 易用清晰的目录结构
2. 使用axios请求库, 统一书写api接口
3. 自动把项目中的px转换成rem, 适配各种移动设备
4. 加入了项目差异化功能


---
> 项目差异化使用说明

1. 通过vue-cli3中提供的环境变量和模式可以在一个项目中创建多个模式  ([vue-cli3环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F))
2. 我们一个模式对应项目中的一个差异化, 我们首先有一套基础代码, 在没有开启项目差异化功能的时候, 会不停的把最新的基础代码拷贝过去.
3. 我们开启项目差异化功能之后, 我们就需要在基础代码中(base_src)编写最新代码, src目录相当于一个容器. 我们有基础代码, 然后删除scr目录重新创建, 把基础代码拷贝过去, 然后再把差异化目录中的差异代码覆盖基础代码, 从而实现整个项目差异化功能.
4. 我们有一个配置文件 ==config.json==, 里面需要配置差异化的项目名字,以及目录等, 可以参考初始(init)的配置.
5. 注意需要在package.json的scripts中配置执行config.js.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
