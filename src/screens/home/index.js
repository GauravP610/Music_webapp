import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { setClientToken } from "../../spotify";
import Login from "../auth/login";
import Feed from "../feed";
import Library from "../library";
import Player from "../player";
import "./home.css";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return (
    <div>
      {!token ? (
        <Login />
      ) : (
        <Router>
          <div className="main-body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/player" element={<Player />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}
