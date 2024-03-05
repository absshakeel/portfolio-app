import React from 'react';
import ReactDOM from 'react-dom/client';

// My website components. 
import Blog from './Blog/Blog';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Portfolio from './Portfolio';
import AddPost from './Blog/components/post/AddPost';

const IndexApp = () => {


  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Portfolio />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/addPost" element={<AddPost/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
