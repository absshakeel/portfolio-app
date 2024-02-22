import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect } from 'react';
import './css/banner-header.css'; 
import './css/common-styling.css'; 
import './css/exp-edu.css'; 
// import './css/footer.css'; 
import './css/projects.css'; 
import './css/publications.css'; 
import './css/recommendations.css'; 
import './css/styles.css'; 
// import './css/skills-cert.css'; 

const IndexApp = () => {

  // useEffect(() => {
  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';

  //   document.head.appendChild(link);

  //   return () => {
  //     document.head.removeChild(link);
  //   };
  // }, []);

  return (
    <>
      <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.deep_purple-pink.min.css"/>
        <link rel="stylesheet" href="styles.css"/>

      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout__header--transparent">
        <div className="android-header mdl-layout__header mdl-layout__header--transparent mdl-layout__header--waterfall mdl-layout__header--transparent">
          <div className="mdl-layout__header-row" style={{
            marginLeft: '6%',
          }}>
            <div>
              <ul className="social-nav">
                <li><a href="https://www.linkedin.com/in/abhishekmadhusudhan" target="_blank" title="Linkedin" rel="nofollow" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://twitter.com/?lang=en" target="_blank" title="Twitter" rel="nofollow" className="twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://github.com/AbhishekM369" target="_blank" title="Github" rel="nofollow" className="github"><i className="fa fa-github"></i></a></li>
                {/* <li><a href="https://www.hackerrank.com/abhishekm369" target="_blank" title="HackerRank" rel="nofollow" className="hackerrank"><span className="fa fa-a" style="font-family: sans-serif">H</span></a></li> */}
              </ul>
            </div>

            <a href="assets/Certifications-Resume/Resume/Abhishek%20Madhusudhan%20-%20Resume.pdf" style={{
              float: 'left',
              clear: 'both',
              margin: '2% 2% 2% 2%',
              fontSize: '32px',
              borderRadius: '4px',
              display: 'block',
            }} download/>


{/*              <span className="fa fa-download" style={{
      color: 'white',
      backgroundColor: 'rgb(72, 72, 72)'}}><span style="font-size: 16px; font-family: Roboto; color: white; vertical-align: middle; display: inline-block; margin-left: 10px">Resume</span></span>
</a> */}

            <div className="android-header-spacer mdl-layout-spacer"></div>

            <div id="navBar" className="android-navigation-container">
              <nav className="android-navigation mdl-navigation">
                <a className="mdl-navigation__link mdl-typography--text-uppercase smooth" href="#" style = {{color: 'black'}}>Home</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase smooth" href="#emphist" style = {{color: 'black'}}>Experience</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase smooth" href="#eduhist" style = {{color: 'black'}}>Education</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase smooth" href="#projects" style = {{color: 'black'}}>Projects</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase smooth" href="#skills_certs" style = {{color: 'black'}}>Skills &amp; Awards</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase smooth" href="#publications"style = {{color: 'black'}}>Publication</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase smooth" href="#recommendations" >Recommendations</a>
              </nav>
            </div>
          </div>
        </div>

      </div>


      {/* Add scripts */}
      <script src="http://code.jquery.com/jquery-3.2.1.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" ></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

      <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>



    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>
);
// ReactDOM.render(<IndexApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
