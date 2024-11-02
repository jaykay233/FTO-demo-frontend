# 专利FTO对比工具

## 项目描述

这是一个基于Next.js和React开发的专利FTO（Freedom to Operate）对比工具。该工具允许用户输入标的专利和比较专利的信息，并进行技术特征的对比分析。

## 功能特点

- 提供两个文本输入区域，分别用于输入标的专利和比较专利的信息
- 点击按钮进行专利对比分析
- 以表格形式展示对比结果，包括技术特征、等同性判断和判断原因

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui 组件库

## 安装步骤

1. 克隆仓库：

   ```bash
   git clone https://your-repository-url.git
   cd patent-fto-comparison
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 运行开发服务器：

   ```bash
   npm run dev
   ```

4. 打开浏览器访问 `http://localhost:3000`

## 使用说明

1. 在"标的专利"文本框中输入要分析的主要专利信息。
2. 在"比较专利"文本框中输入用于对比的专利信息。
3. 点击"进行对比"按钮。
4. 查看生成的对比结果表格。

## 项目结构

```
patent-fto-comparison/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── table.tsx
│   │   └── patent-fto-comparison.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
└── tsconfig.json
```

## 贡献

欢迎提交问题和拉取请求。对于重大更改，请先开issue讨论您想要更改的内容。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)