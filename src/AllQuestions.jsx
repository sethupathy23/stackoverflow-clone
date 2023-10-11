import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "./components/Header/global";

function checkAuth(res) {
  if (res.status === 401) {
    throw Error("Unauthorized");
  } else {
    return res.json();
  }
}

function logout() {
  localStorage.clear();
  // localStorage.removeItem('token');
  window.location.href = "/"; //refresh
}

function Alldata() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    fetch(`${API}/questions`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => checkAuth(res))
      .then((data) => {
        console.log(data);
        setQuestions(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const fetchdata = async () =>{
  //   await fetch("http://localhost:4000/questions",{
  //     headers: {
  //       "x-auth-token": localStorage.getItem('token'),
  //     },
  //   })
  //   .then((res) => checkAuth(res))
  //   .then((data) => setQuestions(data))
  //   .catch(err => logout())
  // }

  return (
    <div>
      {questions &&
        questions.map((ele, index) => <AllQuestions data={ele} key={index} />)}
      ;
    </div>
  );
}

function AllQuestions({ data }) {
  if (!data) {
    return <div>there is no data</div>; // or display a loading message
  }
  console.log(data);
  //   const questions=[{
  //     question:"How to use drag and drop in ant design 1?",
  //     answer:"What I want is an example about how to make the drag and drop of my Table that works properly, but I cannot figure out how to make it works"
  //   },
  //   {
  //     question:"How to use drag and drop in ant design 2?",
  //     answer:"What I want is an example about how to make the drag and drop of my Table that works properly, but I cannot figure out how to make it works"
  //   },
  //   {
  //     question:"How to use drag and drop in ant design 3 ?",
  //     answer:"What I want is an example about how to make the drag and drop of my Table that works properly, but I cannot figure out how to make it works"
  //   },
  //   {
  //     question:"How to use drag and drop in ant design 4?",
  //     answer:"What I want is an example about how to make the drag and drop of my Table that works properly, but I cannot figure out how to make it works"
  //   },
  // ]
  if (data) {
    return (
      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>
              <div className="all-option">
                <p>0</p>
                <span>Answers</span>
              </div>
              <div className="all-option">
                <small>0 views</small>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to="/question">{data.question}</Link>
            <div style={{ width: "90%" }}>
              <div>{data.answer}</div>
            </div>
            <div style={{ display: "flex" }}>
              <span className="question-tags">react</span>
              <span className="question-tags">ant</span>
              <span className="question-tags">frontend</span>
            </div>
            <div className="author">
              <small>Timestamp</small>
              <div className="auth-details">
                <Avatar>H</Avatar>
                <p>UserName</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Alldata;
