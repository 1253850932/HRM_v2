<div align="center">

  <h1>HRM</h1>
  <span><a href="./README.md">English</a> | 中文</span>
</div>

## 特性

- **Vue3**：采用 Vue3 + script setup 最新的 Vue3 组合式 API
- **Element Plus**：Element UI 的 Vue3 版本
- **Pinia**: 传说中的 Vuex5
- **Vite**：真的很快
- **Vue Router**：路由路由
- **TypeScript**：JavaScript 语言的超集
- **PNPM**：更快速的，节省磁盘空间的包管理工具
- **Scss**：和 Element Plus 保持一致
- **CSS 变量**：主要控制项目的布局和颜色
- **ESlint**：代码校验
- **Prettier**：代码格式化
- **Axios**：发送网络请求（已封装好）
- **UnoCSS**：具有高性能且极具灵活性的即时原子化 CSS 引擎
- **注释**：各个配置项都写有尽可能详细的注释
- **兼容移动端**: 布局兼容移动端页面分辨率

## 功能

- **用户管理**：登录、登出演示
- **权限管理**：内置页面权限（动态路由）、指令权限、权限函数、路由守卫
- **多环境**：开发环境（development）、预发布环境（staging）、正式环境（production）
- **多主题**：内置普通、黑暗、深蓝三种主题模式
- **错误页面**: 403、404
- **Dashboard**：根据不同用户显示不同的 Dashboard 页面
- **其他内置功能**：SVG、动态侧边栏、动态面包屑、标签页快捷导航、Screenfull 全屏、自适应收缩侧边栏

## 🚀 开发

```bash
# 配置
1. 一键安装 .vscode 目录中推荐的插件
3. node 版本 16+
4. pnpm 版本 7.x

# 克隆项目
git clone https://github.com/un-pany/v3-admin-vite.git

# 进入项目目录
cd v3-admin-vite

# 安装依赖
pnpm i

# 启动服务
pnpm dev
```

## ✔️ 预览

```bash
# 预览预发布环境
pnpm preview:stage

# 预览正式环境
pnpm preview:prod
```

## 📦️ 多环境打包

```bash
# 构建预发布环境
pnpm build:stage

# 构建正式环境
pnpm build:prod
```

## 🔧 代码检查

```bash
# 代码格式化
pnpm lint

# 单元测试
pnpm test
```

## Git 提交规范参考

- `feat` 增加新的业务功能
- `fix` 修复业务问题/BUG
- `perf` 优化性能
- `style` 更改代码风格, 不影响运行结果
- `refactor` 重构代码
- `revert` 撤销更改
- `test` 测试相关, 不涉及业务代码的更改
- `docs` 文档和注释相关
- `chore` 更新依赖/修改脚手架配置等琐事
- `workflow` 工作流改进
- `ci` 持续集成相关
- `types` 类型定义文件更改
- `wip` 开发中

## pinia 持久化

- 安装插件

```js
  yarn add pinia-plugin-persistedstate
  or
  npm i  pinia-plugin-persistedstate
```

- 使用插件 在`main.ts`中注册

```js
import { createApp } from "vue"
import App from "./App.vue"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(pinia)
```

- 模块开启持久化

```js
import { defineStore } from "pinia"

export const useStore = defineStore("main", () => {}, {
  // 开启持久化
  persist: true
})
```

## tsx 中遍历对象

### 遍历对象的键

在 React 中循环遍历对象：

- 使用`Object.keys()` 方法得到对象的键组成的数组。
- 使用`map()`方法来迭代键组成的数组。

```tsx
const employee = {
  id: 1,
  name: "Bob",
  salary: 123
}

return Object.keys(employee).map((e) => <div>{e}</div>)
```

我们使用`Object.keys`方法得到对象的键组成的数组。

```tsx
const employee = {
  id: 1,
  name: "Bob",
  salary: 123
}

// 👇️ ['id', 'name', 'salary']
console.log(Object.keys(employee))

// 👇️ [1, 'Bob', 123]
console.log(Object.values(employee))
```

### 遍历对象的值

#### Object.values

```tsx
const employee = {
  id: 1,
  name: "Bob",
  salary: 123
}

return (
  Object.values(employee).map((e) => <div>{e}</div)
)
```

如果你只想渲染对象的值，你可以使用此方法直接访问它们。

#### Object.entries

你也可以使用 Object.entries 方法来返回对象的键值对数组。

```tsx
const employee = {
  id: 1,
  name: "Bob",
  salary: 123
}

return (
  Object.entries(employee).map((key,value) => <div>{key}{value}</div)
)
```

#### Array.forEach()

使用 `Array.forEach()`方法来迭代对象的键，并将 JSX 元素推送到一个数组中，然后我们进行渲染。

```tsx
const employee = {
  id: 1,
  name: "Bob",
  salary: 123
}

return (
  Object.keys(employee).forEach(key => <div>{key}</div)
)
```

`Array.forEach()`方法在每个键上都会被调用，然而`forEach()`方法返回`undefined`，所以我们不能直接在`JSX`代码中使用它。相反，我们把`JSX`元素推到一个数组中，然后再进行渲染。

## vite 同时使用 proxy 和 mock 请求冲突

如果在 Vite 中配置了 proxy，然后同时又使用了 vite-plugin-mock 来模拟数据，当请求 mock 接口时，可能会出现请求地址错误的问题。这是由于 Vite 在加入代理之后，对请求地址做了一些处理，可能使得 mock 中所定义的接口路径无法正确匹配。

解决方案是，在 vite.config.js 中给代理中间件设置一个前缀，然后在 mock 中的接口路径中也使用相应的前缀，这样就可以正确匹配请求地址。例如，假设我们在 Vite 的 proxy 中设置了一个路径前缀 api，并且使用 vite-plugin-mock 来模拟数据，则可以按照以下方式来配置 mock 路径：

```js
// vite.config.js
export default {
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
}
```

```js
// mock/getData.js
export default {
  // 定义 mock 路径时需要加上前缀
  "GET /api/data": {
    code: 0,
    data: {
      name: "vite",
      age: 1
    }
  }
}
```

这样，当我们请求 http://localhost:3000/api/data 接口时，先会被代理中间件路由到 http://localhost:8080/data，然后才会被 vite-plugin-mock 拦截进行数据模拟，最后返回响应结果。
