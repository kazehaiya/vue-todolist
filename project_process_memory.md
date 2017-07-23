# TodoList 实现步骤：
<!-- 只添加了简单样式 -->
1. 大概布局：总的Title、Input输入框、List列表
2. List列表状态：已完成（灰色）、未完成（黑色）
3. Input输入添加
    写完后发现可以直接将input框放在id="list"的div框内，直接通过this添加todos内的成员即可
4. 删除List方法
    通过鼠标hover改变X的颜色来显示删除按钮