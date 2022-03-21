import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** routes imports */
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Reset from "./components/authentication/Reset";
import Dashboard from "./components/authentication/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
