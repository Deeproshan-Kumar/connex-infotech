import { Outlet } from "react-router-dom";
import {Header, Footer} from "./components/layout";

const App = () => {
  return (
    <main className="position-relative">
      <div className="gradient-bg-graphics">
        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>
        <div className="gradient gradient-4"></div>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
