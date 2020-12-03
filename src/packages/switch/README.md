# Button 按钮
### 介绍
```
简单的按钮组件
```
### 引入
```js
import Vue from 'vue';
import { Button } from 'dx-web-com'

Vue.use(Button)
```
## 代码演示

### 按钮类型
按钮支持 `default`、`primary`、`warning`、`danger` 四种类型，默认为 `default`。
```html
<dx-button type="primary">主要按钮</dx-button>
<dx-button type="default">默认按钮</dx-button>
<dx-button type="warning">警告按钮</dx-button>
<dx-button type="danger">危险按钮</dx-button>
```
### 按钮尺寸
按钮支持 `large`、`normal`、`mini` 三种类型，默认为 `normal`。
```html
<dx-button size="large">大按钮</dx-button>
<dx-button type="normal">普通按钮</dx-button>
<dx-button type="mini">小按钮</dx-button>
```
### 描边模式
通过 `plain` 属性将按钮设置为描边模式，描边模式的文字为按钮颜色，背景为白色
```html
<dx-button type="primary" plain>主要按钮</dx-button>
<dx-button type="default" plain>默认按钮</dx-button>
<dx-button type="warning" plain>警告按钮</dx-button>
<dx-button type="danger" plain>危险按钮</dx-button>
```
### 禁用状态
通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。
```html
<dx-button disabled type="primary">禁用状态</dx-button>
<dx-button disabled type="default">禁用状态</dx-button>
<dx-button disabled type="danger">禁用状态</dx-button>
```
### 自定义颜色
通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。
```html
<dx-button disabled type="primary">禁用状态</dx-button>
<dx-button disabled type="default">禁用状态</dx-button>
<dx-button disabled type="danger">禁用状态</dx-button>
```

## API
### Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `default` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `normal` `mini` | _string_ | `normal` |
| plain | 是否为描边模式 | _boolean_ | `false` |
| text | 展示文本 | _string_ | - |
| color | 背景色, 支持渐变 | _string_ | - |

### Events
| 事件名 | 说明 | 回调 | 
| --- | --- | --- |
| click | 点击按钮，且按钮状态不为禁用时触发 | event: Event |
| touchstart | 开始触摸按钮触发 | event: TouchEvent |

### Slots
| 名称 | 说明 | 
| --- | --- | 
| default | 按钮内容 | 









