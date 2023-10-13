import { Button, Space } from "antd";
import "./App.css";
import BasicUse from "./antd/01_basicUse";
import DongTai from "./antd/02_dongtai";
import OtherPage from "./views/OtherPage";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  return (
    <>
    <h2>Home</h2>
     <Space>
     <Button type="primary" onClick={() => navigate('/basicUse')}>BasicUse</Button>
     {/* <Link to={'basicUse'}>BasicUse</Link> */}
     <Button type="primary" onClick={() => navigate('/dongtai')}>动态增删</Button>
     <Button type="primary" onClick={() => navigate('/depFields')}>依赖字段</Button>
     </Space>
    
    </>
  );
}

export default App;
