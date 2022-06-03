import Header from "./components/Header/Header";
import AppStyle from "./styles.module.css";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import { Router } from "@reach/router";

export default function App() {
  return (
    <div className={AppStyle.app}>
      <Header />
      <Router>
        <Home path="/" />
        <Admin path="admin" />
      </Router>
    </div>
  );
}
