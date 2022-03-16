import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

function App() {
  return;
  <BrowserRouter>
    <switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </switch>
  </BrowserRouter>;
}

export default App;
