import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import {TagsInput} from 'react-tag-input-component'
import "./App.css";
import { Link } from "react-router-dom";

function Addquestions() {
  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a Public questions</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imaging you're asking a question to another
                  person
                </small>
                {/* <TagsInput name="tags" placeHolder="Add question title" /> */}
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill className="react-quill" theme="snow" />
                {/* <TagsInput name='tags' placeHolder='Press enter to add new tag'/> */}
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add upto 5 tags to describe what your question is about
                </small>
                {/* <TagsInput
                  name="tags"
                  placeHolder="Press enter to add new tag"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <button className="button">Add your question</button>

        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Addquestions;
