# why — 数字花园

一个优雅的静态博客，基于 GitHub Pages 托管。

## 目录结构

```
blog/
├── index.html          # 首页
├── post.html           # 文章页模板
├── archive.html        # 归档页
├── about.html          # 关于页
├── write.html          # 写文章页
├── style.css           # 样式
├── script.js           # 交互逻辑
└── posts/              # 文章文件夹
    └── *.html          # 每篇文章一个 HTML 文件
```

## 文章管理

### 写文章
1. 打开 `write.html`
2. 填写标题、标签、内容
3. 点击「生成文章」下载 HTML 文件
4. 将下载的文件放入 `posts/` 文件夹

### 发布到 GitHub
```bash
# 克隆仓库
git clone https://github.com/whyyds2931/whyyds2931.github.io.git
cd whyyds2931.github.io

# 复制博客文件（替换原有内容）
# 将 blog/ 下的所有文件复制到仓库根目录

# 提交推送
git add .
git commit -m "Update blog"
git push
```

## 设计特点

- **温暖编辑风** — 象牙白底色，墨色文字，琥珀色点缀
- **优雅字体** — Cormorant Garamond + Noto Serif SC
- **丝滑动效** — 入场动画、悬停反馈、滚动感知
- **响应式** — 完美支持手机、平板、桌面
- **零依赖** — 纯 HTML/CSS/JS，无框架，无构建工具

## 自定义

- 修改 `index.html` 中的 hero 区域文字
- 修改 `about.html` 中的个人信息
- 修改 `script.js` 中的 `articles` 数组来更新文章列表
- 修改 `style.css` 中的 CSS 变量来调整配色

---

Built with ❤️ by why
