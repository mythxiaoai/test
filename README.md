# OREO ID 定制化界面

## 项目描述
这是一个模仿OREO官网定制化界面的项目，用户可以通过选择不同的配置来定制自己的OREO饼干。

## 已完成功能
- 基础项目结构搭建

## 待完成功能
1. 左侧手风琴菜单
   - Select creme filling
   - Select fudge
   - Select sprinkles
   - Design your cookie
   - Add text
   - Select packaging
2. 右侧预览区域
   - 实时预览配置效果
   - 3D展示效果

## 技术栈
- Next.js
- Ant Design
- BEM命名规范的CSS

## 注意事项
1. 需要安装的依赖：
   - @ant-design/icons
   - antd
   - next
   - react
   - react-dom

## 接口文档
暂无外部接口，所有数据都在前端模拟

# React 18 startTransition API 示例

这个项目展示了React 18中新引入的`startTransition` API的使用方式和效果。通过两个对比实例，你可以直观地感受到这个新特性在提升用户体验方面的巨大作用。

## 什么是 startTransition？

`startTransition`是React 18引入的新API，它允许你将一些更新标记为"过渡更新"（transition updates），这些更新的优先级比正常更新更低。这使得React能够在处理这些更新时被打断，优先响应用户的交互操作（如输入），从而保持UI的响应性。

简单来说，它让你能够区分：

- **紧急更新**: 如按钮点击、输入字段更新等需要立即反馈的操作
- **过渡更新**: 如搜索结果显示、数据过滤等可以稍微延迟的非紧急操作

## 本项目包含的示例

### 1. 不使用 startTransition (index1.html)

在这个示例中，当用户在搜索框中输入时，所有更新都被视为同等优先级。这导致：

- 用户输入和大量搜索结果渲染竞争计算资源
- 界面可能会出现明显的卡顿
- 输入响应延迟增加，FPS下降

### 2. 使用 startTransition (index2.html)

在这个示例中，我们使用`startTransition`来区分优先级：

- 输入更新保持为高优先级，保证即时响应
- 搜索结果渲染被标记为过渡更新，可以被中断
- 界面保持流畅，即使在处理大量数据
- 增加了视觉反馈，显示"更新中"状态

## 如何使用

直接在浏览器中打开对应的HTML文件即可：

1. 打开`index1.html`体验不使用startTransition的版本
2. 打开`index2.html`体验使用startTransition的版本

## 代码实现对比

### 不使用startTransition的实现

```jsx
// 当搜索词变化时，立即更新搜索结果
React.useEffect(() => {
    const newItems = [];
    if (searchTerm) {
        for (let i = 0; i < 500; i++) {
            if (i.toString().includes(searchTerm) || 
                `项目 ${i}`.includes(searchTerm)) {
                newItems.push(`匹配 "${searchTerm}"`);
            }
        }
    }
    setItems(newItems);
}, [searchTerm]);
```

### 使用startTransition的实现

```jsx
// 使用React.useTransition钩子
const [isPending, startTransition] = React.useTransition();

const handleSearch = (e) => {
    const value = e.target.value;
    
    // 立即更新输入值（高优先级更新）
    setSearchTerm(value);
    
    // 使用startTransition将列表更新标记为低优先级
    startTransition(() => {
        const newItems = [];
        if (value) {
            for (let i = 0; i < 500; i++) {
                if (i.toString().includes(value) || 
                    `项目 ${i}`.includes(value)) {
                    newItems.push(`匹配 "${value}"`);
                }
            }
        }
        setItems(newItems);
    });
};
```

## 应用场景

`startTransition` API 适用于以下场景：

1. **实时搜索/过滤**：当用户输入搜索关键词时，保持输入流畅
2. **数据可视化**：处理大量数据渲染时，确保UI控件仍然响应迅速
3. **复杂表单**：表单填写时的实时验证、计算或预览
4. **页面切换**：在单页应用中进行页面切换时优化用户体验

## 注意事项

- `startTransition`不会使计算变得更快，它只是改变了更新的优先级
- 过渡更新不适用于需要同步响应的操作（如输入控件本身）
- 使用`isPending`状态可以为用户提供视觉反馈，表明应用正在工作
- 在React 18之前，可以使用`unstable_startTransition`，但建议升级到稳定版API