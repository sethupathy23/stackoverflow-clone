import React, { useState } from "react";
import "./App.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import Avatar from "@mui/material/Avatar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { fontWeight } from "@mui/system";

function MainQuestion() {
  const [show, setShow] = useState(false);
  return (
    <div className="m42">
      <div className="main">
        <div className="main-container">
          <div className="main-top">
            <h2 className="main-question">This is question title</h2>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
          <div className="main-desc">
            <div className="info">
              <p>Timestamp</p>
              <p>
                Active <span>Today</span>
              </p>
              <p>
                Viewed<span>43 times</span>
              </p>
            </div>
          </div>
          <div className="all-questions">
            <div className="all-questions-container">
              <div className="all-questions-left">
                <div className="all-options">
                  <p className="arrow">
                    <ArrowDropUpIcon />
                  </p>
                  <p className="arrow">0</p>

                  <p className="arrow">
                    <ArrowDropDownIcon />
                  </p>
                  <BookmarkIcon />
                  <HistoryIcon />
                </div>
              </div>
              <div className="question-answer">
                <p>This is question body</p>
                <div className="author">
                  <small>asked "Timestamp"</small>
                  <div className="auth-details">
                    <Avatar>H</Avatar>
                    <p>Author Name</p>
                  </div>
                </div>
                <div className="comments">
                  <div className="comment">
                    <p>
                      This is comment -<span>User name</span>
                      <small>Timestamp</small>
                    </p>
                  </div>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setShow(!show)}
                  >
                    Add comment
                  </p>
                  {show && (
                    <div className="title">
                      <textarea
                        type="text"
                        style={{
                          margin: "5px 0px",
                          width: "500px",
                          padding: "10px",
                          border: "1px solid rgba(0,0,0,0.2)",
                          borderRadius: "3px",
                          outline: "none",
                        }}
                        placeholder="Add Your Comment..."
                        rows={5}
                      ></textarea>
                      <br />
                      <button
                        style={
                          {
                            // maxWidth:"fix-content"
                          }
                        }
                      >
                        Add Comment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
            }}
            className="all-questions"
          >
            <p
              style={{
                marginBottom: "20px",
                fontSize: "1.3rem",
                fontWeight: "300",
              }}
            >
              No. of answer
            </p>
            <div className="all-questions-container">
              <div className="all-questions-left">
                <div className="all-options">
                  <p className="arrow">
                    <ArrowDropUpIcon />
                  </p>
                  <p className="arrow">0</p>

                  <p className="arrow">
                    <ArrowDropDownIcon />
                  </p>
                  <BookmarkIcon />
                  <HistoryIcon />
                </div>
              </div>
              <div className="question-answer">
                <p>This is question body</p>
                <div className="author">
                  <small>asked "Timestamp"</small>
                  <div className="auth-details">
                    <Avatar>H</Avatar>
                    <p>Author Name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-answer">
          <h3
            style={{
              fontSize: "22px",
              margin: "10px 0px",
              fontWeight: "400",
            }}
          >
            Your Answer
          </h3>
          <ReactQuill
            className="react-quill"
            theme="snow"
            style={{
              height: "200px",
            }}
          />
        </div>
        <button
          style={{
            maxWidth: "fix-content",
            marginTop: "70px",
          }}
        >
          Post Your Answer
        </button>
      </div>
    </div>
  );
}

export default MainQuestion;
