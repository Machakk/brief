import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
