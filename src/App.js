import "./App.css";
import AddContest from "./components/contest/AddContest";
import Home from "./components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import { Component } from "react";
import ListContest from "./components/contest/ListContest";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Pranish Presentation
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addContest"} className="nav-link">
                Create Contest
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/listContest"} className="nav-link">
                Read Contest
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addContest" element={<AddContest />} />
            <Route path="/listContest" element={<ListContest />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
