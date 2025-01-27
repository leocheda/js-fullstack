import { useState, useEffect } from "react";

// 子组件
const ChildComponentA = ({ onReceiveChildComponentA }) => {
  const message = "弟弟";
  return (
    <div>
      <div>这是子组件A</div>
      <button onClick={() => onReceiveChildComponentA(message)}>
        发送子组件A到B组件
      </button>
    </div>
  );
};

const ChildComponentB = (props) => {
  return (
    <div>
      <div>这是子组件B</div>
      <div>这是从子组件A接收的信息:{props.children}</div>
    </div>
  );
};

// * 这是父组件(组件内容在下面)
function App() {
  const [newContent, setNewContent] = useState("");

  const receiveContent = (content) => {
    setNewContent(content);
  };

  return (
    <div className="App">
      ------ 父组件 ------
      <br />
      <ChildComponentA
        onReceiveChildComponentA={receiveContent}
      ></ChildComponentA>
      <ChildComponentB>{newContent}</ChildComponentB>
    </div>
  );
}

export default App;
