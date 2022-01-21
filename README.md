# xhua-vue2-temp

这是一个基于vue2移动端的模板，具有基础的组织架构，配置了env环境区分、eslint、网络请求等；并且可以动态的获取路由及modules的具体信息，不需要再进行路由及modules的手动引入；还通过postcss-px-to-viewport进行了不同屏幕的适配(px ---> vw)。

## 需要注意的版本信息

```
"node-sass": "4.12.0" 
"sass-loader": "8.0.2"
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads
```
yarn start
yarn start:qa
```

### Compiles and minifies
```
yarn build:qa
yarn build:dev
yarn build:prod
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
