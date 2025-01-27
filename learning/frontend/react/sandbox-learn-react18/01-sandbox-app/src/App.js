// 项目计划 -- 写在这里
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// TODO:
// TODO: 1.
// TODO: 2.
// TODO: 3.
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 导入 -- 写在这里
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// * 示例钩子函数
// * import { useState, useEffect } from "react"
import { useState } from "react";
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 常量数据/工具函数 -- 写在这里
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// * 示例常量
// * const API_URL = "https://example.com/api";

// * 示例工具函数
// * function formatDate(date) {
// *  return date.toLocaleDateString();
// * }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 子组件 -- 写在这里
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// * 示例子组件
// * function ChildComponent() {
// *  return <p>子组件内容</p>
// * }

const ChildComponent = ({onReceiveChildMsg}) => {
  const childMsg = '爸爸'
  return (
    <div>
      **这是子组件
      <button onClick={()=>onReceiveChildMsg(childMsg)}>点击发送子组件信息</button>
    </div>
  )
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 项目的根组件(一切组件的根基)
// App.js 被引用到 index.js 然后被其渲染到public/index.html(root)
// * 这是父组件(组件内容在下面)
function App() {
  // 组件状态/事件处理/生命周期 -- 写在这里
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // * 示例组件状态
  // * const [count, setCount] = useState(0)

  // * 示例事件处理
  // * const handleClick = () => setCount(count + 1)

  // * 示例生命周期
  // * useEffect(() => {
  // * console.log("组件挂载或更新");
  // * }, [count]);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const [newMsg, setNewMsg] = useState('');
  const receiveChildMsg = (msg) => {
    setNewMsg(msg)
  }

  return (
    <div className="App">
      ------ 项目根组件 ------
      <br />
      {/* 根组件代码 -- 写在这里 */}
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {/* 这是父组件内容 */}
      {/* 示例根组件代码 */}
      {/* <p>计数值：{count}</p>
      <button onClick={handleClick}>增加计数</button> */}
      *这是父组件, 接收子组件内容为: __{newMsg}__
      <ChildComponent onReceiveChildMsg = {receiveChildMsg}/>
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
    </div>
  );
}

export default App;
