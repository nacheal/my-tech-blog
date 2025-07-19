---
title: "现代 CSS 布局技术：Flexbox 和 Grid 完全指南"
date: "2023-07-21"
tags: ["css", "前端开发", "响应式设计"]
excerpt: "深入探讨 Flexbox 和 CSS Grid 布局技术，帮助你构建复杂的响应式界面。"
featured: true
metadata: {
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}
---

## 为什么需要现代布局技术？

传统的 CSS 布局方式（如浮动和定位）在构建复杂布局时往往显得力不从心。Flexbox 和 CSS Grid 的出现，彻底改变了这一局面。

## Flexbox 布局

Flexbox 是一维布局模型，适合在单行或单列中排列元素。

### 基本概念
- **容器**：设置 `display: flex` 的元素
- **项目**：容器的直接子元素
- **主轴**和**交叉轴**：定义布局方向

```css
.container {
  display: flex;
  justify-content: space-between;
}