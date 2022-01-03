

import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, NavLink, Route,Routes } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import AbouticonLink from "./components/AbouticonLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import About from "./pages/About";

function App(){
const [feedback, setFeedback] = useState(FeedbackData);

const addFeedback = (newFeedback) =>{
  newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback,...feedback])
}

const deleteFeedback = (id) =>{
  if(window.confirm("Are you sure you want to delete?")){
    setFeedback(feedback.filter((item)=> item.id !== id ));
  }
}
    return (
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          
          </Routes>

          {/* <Card>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </Card> */}
          <AbouticonLink />
        </div>
      </Router>
    );
}


export default App