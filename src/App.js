import "./App.css";

import Header from "./components/Header.js";
import LeftMenuNav from "./components/LeftMenuNav.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenuNav />
      <Main />
    </div>
  );
}

export default App;
