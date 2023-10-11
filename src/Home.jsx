import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Mainn from "./Mainn";
import MainQuestion from "./Mainquestion";
// import Addquestions from './Addquestions'
// import Login from './Login'
import Header from "./components/Header/Header";
import Addquestions from "./Addquestions";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <div style={{ display: "flex", gap: "10px" }}>
          <Sidebar />
          <Mainn />
          {/* <Addquestions /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
