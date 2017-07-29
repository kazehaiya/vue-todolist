# vue-todolist
I'm a beginner to Vue, and just try to use what I have learned in Vue.

# TodoList 实现步骤：
<!-- 只添加了简单样式 -->
1. 大概布局：总的Title、Input输入框、List列表
2. List列表状态：已完成（灰色）、未完成（黑色）
3. Input输入添加
    写完后发现可以直接将input框放在id="list"的div框内，直接通过this添加todos内的成员即可
4. 删除List方法
    通过鼠标hover改变X的颜色来显示删除按钮

# 修改
1. 删除方法
    之前网上查的$index获取todo的位置，发现报错，今天查了下vue2的更改部分，发现$index和$key被移除了，于是改变了删除方法(todo, index) in todos ==> 来获取index值，从而用splice删除数组对应位置的值。

2. 添加LocalStorage方法存储内容