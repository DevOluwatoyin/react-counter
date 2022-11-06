import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Home from "./home";
import "./App.css";
import ErrorPage from "./components/errorPage";
import Counter from "./components/counter";
import CounterApp from "./components/useReducer";

function MyApp() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/useReducer" element={<CounterApp />} />
            <Route path="/errorPage" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default MyApp;
