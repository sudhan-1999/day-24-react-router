import React from "react";

function Carrer() {
  return (
    <div className="first">
      <div className="row">
        <div className="col-lg-6">
          <h1>
            <React.Fragment>
              WE'RE
              <br />
              HIRING
            </React.Fragment>
          </h1>
          <img className="hiringimage" src="https://www.guvi.in/img/dev.png" alt="web development" />
        </div>
        <div className="col-lg-6">
          <img src="	https://www.guvi.in/img/base2.png" />
        </div>
      </div>
      <div className="container">
        <div className="main">
          <h2>Who We Are ?</h2>
          <p className="main-para">
            GUVI is an online skill acceleration and hiring platform which makes
            IT skilling more effective by offering technology courses like
            Python,Machine Learning, Artificial Intelligence, etc. in vernacular
            languages(Tamil, Telugu, Hindi, Kannada, Bengali). AI-based adaptive
            algorithm customizes and proposes the learning path based on student
            skill level. GUVI uses similar approach like Udacity but the path
            breaking difference is that, it delivers the content in vernacular
            languages which helps the students to learn faster and make them
            land in jobs .GUVI builds the coding profile for learner by tracking
            his learning activities and show case it to their hiring partners.
          </p>
        </div>
        <div className="main-2">
          <img src="https://www.guvi.in/img/flow.png" alt="How it works" />
        </div>
        <div className="main-3">
          <h1>Ready To Take Challenge?</h1>
          <p className="main-3-para">
            Upload your files to github and do mail the link to dev@guvi.in
          </p>
        </div>
        <div className="carrer-1">
          <h3>Web Development</h3>
          <p className="p1">6 Open Roles</p>
          <p className="p2">THINGS TO BE NOTED :</p>
          <p className="p3">
            <ul></ul>
            <li>
              HTML, JS, CSS and PHP code should be in separate files none of the
              code must co-exist in the same file.
            </li>
            <li>Use jQuery to simplify dom manipulations.</li>
            <li>
              Only use Jquery AJAX for interacting with the backend (strictly no
              usage of form submission).
            </li>
            <li>
              CSS can be used but the form must be designed in bootstrap in
              order to maintain page responsiveness.
            </li>
            <li>
              Use MySql for storing the registered data and MongoDB for Storing
              the details of the user profiles.
            </li>
            <li>
              In MySQL always use Prepared Statements, with no usage of simple
              SQL statements.
            </li>
            <li>
              The login session should be maintained only using browser
              localstorage (Do not use PHP Session).
            </li>
            <li>Use Redis to store the session information in the backend.</li>
            <li>
              Don't use more than two fonts and any icons or images should be in
              SVG format.
            </li>
            <li>Host it on Heroku or AWS.</li>
            <li>
              Upload your files to github and submit below or mail the Github
              link and Hosted Link to dev@guvi.in
            </li>
          </p>
          <button className="button">Download Task</button>
          <br></br>
          <br></br>
          <button className="button1">Submit Task</button>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3>Graphic Designing</h3>
            <p className="p1">No current openings</p>
            <p className="p2">THINGS TO BE NOTED :</p>
            <p className="p3">
              <ul></ul>
              <li>Illustration and vector images must be used</li>
              <li>Logo frame rate is 1000 x 1000 pixel</li>
              <li>color scheme</li>
              <li>#20FC8F (primary)</li>
              <li>#14E885 (secondary)</li>
              <li>Output should be in jpeg, png, pdf</li>
              <li>Multiple entries are appreciable</li>
              <li>Don't use more than two fonts</li>
            </p>
            <button className="button">Download Task</button>
          </div>
          <div className="col-lg-6">
            <img src="https://www.guvi.in/img/side.png" alt="animation.."></img>
          </div>
        </div>
        <div className="videoanimation">
          <h3>Video Animation</h3>
          <p className="p1">No current openings</p>
          <p className="p2">THINGS TO BE NOTED :</p>
          <p className="p3">
            <ul>
              <li>Use Illustrations and vector images to create the video.</li>
              <li>
                Any professional background score with Non Copy-righted audio
                should be used as background music
              </li>
              <li>No Voice overs are allowed</li>
              <li>Output should be in mp4 with frame rate of 1920 * 1080 P</li>
              <li>Multiple entries are appreciated.</li>
            </ul>
          </p>
          <button className="button">Download Task</button>
        </div>
        <div className="problemsetter">
          <h3>Problem Setter</h3>
          <p className="p1">No current openings</p>
          <p className="p2">THINGS TO BE NOTED :</p>
          <p className="p3">
            <ul></ul>
            <lu>The person must be strong in Data structures and algorithms</lu>
            <lu>Questions should not be copied from the outside source</lu>
            <lu>
              The problem must be explained with necessary sample input and
              output
            </lu>
            <lu>Minimum of five different test cases must be framed</lu>
            <lu>Negative test cases also must be framed</lu>
          </p>
          <button className="button">Download Task</button>
        </div>
      </div>
      <div className="footer">
        <div className="row">
          <div className="col-lg-2">
            <a href="#" className="logo">
              <img
                src="https://www.guvi.in/images/guvi-logo-full.png"
                alt="guvi logo.."
              />
            </a>
          </div>
          <div className="col-lg-2">
            <h6>FEATURED COURSES</h6>
            <ul>
              <li>Subscription</li>
              <li>Blockchain</li>
              <li>C</li>
              <li>C++</li>
              <li>Cyber Security</li>
              <li>Machine Learning</li>
              <li>MongoDB</li>
              <li>Pygame</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6>PLATFORM</h6>
            <ul>
              <li>Codekata</li>
              <li>Course library</li>
              <li>Forum</li>
              <li>HYRE</li>
              <li>IDE</li>
              <li>MicroARC</li>
              <li>project board</li>
              <li>Rewards</li>
              <li>Webkata</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6>SOLUTION</h6>
            <ul>
              <li>Corporate</li>
              <li>HackerKid</li>
              <li>Courses</li>
              <li>Zen Class</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>Company</h6>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>FAQ</li>
            </ul>
            <p className="footer-para">
              IITM Research park - phase 2, module #7c, 3rd floor, D block,
              Kanagam Rd, Tharamani, Chennai, Tamil Nadu, India. 600113
            </p>
          </div>
        </div>
        <p className="last-para">
          Copyright 2004 - 2021 GUVI Geek Network Pvt Ltd., All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Carrer;
