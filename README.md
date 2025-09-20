# 素材管理姬官网

这是素材管理姬软件的官方网站，提供软件介绍、功能展示、下载和更新日志等服务。

## 技术栈

- Vue 3
- TypeScript
- Vite
- Element Plus

## 开发环境搭建

### 安装依赖

```bash
# 使用yarn安装依赖
# 项目配置了yarn@4.10.2作为包管理器
# 若没有安装yarn，请先安装：npm install -g yarn

yarn install
```

### 开发模式运行

```bash
# 启动开发服务器，默认监听3000端口
# 访问 http://localhost:3000 查看效果
yarn dev
```

### 构建生产版本

```bash
# 构建生产版本，输出到dist目录
yarn build
```

### 预览生产版本

```bash
# 预览生产构建的内容
# 访问 http://localhost:4173 查看效果
yarn preview
```

## 项目结构

```
/src
  /views        # 页面组件
  /router       # 路由配置
  /assets       # 静态资源
  App.vue       # 根组件
  main.ts       # 入口文件
```

## 主要页面

1. **首页** - 软件介绍、功能特点、截图展示、下载入口
2. **更新日志** - 查看所有版本的更新内容
3. **问题反馈** - 提交问题和建议的表单

## 其他命令

```bash
# 代码类型检查
yarn type-check

# 代码格式化
yarn format

# 代码检查并修复
yarn lint
```

## 注意事项

1. 确保安装了正确版本的Node.js和yarn
2. 开发过程中如有问题，请查看控制台输出
3. 构建后的文件可直接部署到任何静态网站托管服务