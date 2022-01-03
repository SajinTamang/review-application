

import React from "react";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import AbouticonLink from "./components/AbouticonLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./pages/About";
import {FeedBackProvider} from "./context/FeedbackContext"

function App(){
    return (
      <FeedBackProvider>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList  />
                  </>
                }
              ></Route>
            </Routes>
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
            <AbouticonLink />
          </div>
        </Router>
      </FeedBackProvider>
    );
}


export default App