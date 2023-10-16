import { Button, Space } from "antd";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="shadow-md m-4 border-2 border-green-400  border-solid">
        <h2>Home</h2>
        <h4 className=" border-black p-4 border-2 border-solid rounded-sm">
          哇哈哈
        </h4>
        <div className="text-[24px] hover:text-[50px]">morning</div>
        <Space>
          <Button className="bg-red-400" onClick={() => navigate("/basicUse")}>
            BasicUse
          </Button>
          <Button onClick={() => navigate("/dongtai")}>动态增删</Button>
          <Button onClick={() => navigate("/depFields")}>依赖字段</Button>
          {/* <Link to={'basicUse'}>BasicUse</Link> */}
        </Space>
        <div className="bg-yellow-500 md:bg-blue-300">随宽度响应颜色</div>
        <div className="flex-center p-3">
          <button className="btn-primary rounded-md p-2">自定义</button>
        </div>
      </div>
    </>
  );
}

export default App;
