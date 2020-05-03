import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Apps that I built</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="https://i.imgur.com/b5OXAHs.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Ghibli-Me</h5>
                        <p>React, External API</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="https://i.imgur.com/L4Z1xQV.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Gamium</h5>
                        <p>React, Express</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="https://i.imgur.com/FLsFnHx.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>(App)erture</h5>
                        <p>React, Ruby On Rails</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
                
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="https://i.imgur.com/b5OXAHs.png" alt="" />
            <div className="description-box">
              <h4>Ghibli-Me</h4>
              <p>Ghibli me is an online directory where the user can search for information and statistics regarding Studio Ghibli films. The app is a multi-page, front-end website built with React.js and utilizes anexternal RESTful API containing data on Studio Ghibli movies(ghibliapi.herokuapp.com). The user navigates through data using adrop down menu.</p>
              <span className="categories"><i className="fa fa-tag" />React, RESTful API</span>
            </div>
            <div className="link-box">
              <a href="http://ghibli-me.surge.sh/">Ghibli-Me</a>
              <a href="https://github.com/MarkhamJames/Project-2">___Github</a>
              <a className="popup-modal-dismiss">    Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="https://i.imgur.com/L4Z1xQV.png" alt="" />
            <div className="description-box">
              <h4>Gamium</h4>
              <p>Gamium started as a collaborative project with two other students attending the software engineering immersive at General Assembly.  The project is a directory of students' projects in our softwareengineering class. This is a full stack app capable of full CRUD through it's comment section where users can leave reviews. The front end is built with React.js, the back end is built with Express.</p>
              <span className="categories"><i className="fa fa-tag" />React, Express</span>
            </div>
            <div className="link-box">
              <a href="http://gamium.surge.sh/">Gamium</a>
              <a href="https://github.com/Shayk91/gamium">___Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="https://i.imgur.com/FLsFnHx.png" alt="" />
            <div className="description-box">
              <h4>(App)erture</h4>
              <p>(App)erture allows the user to search through points of interest in New York City giving recommendations on how to take advantage of the selected site photographically. The site makes use of Auth features including Register, Login, and Token keys. This is a full CRUD, full-stack app, the front end is built in React.js, the back-end built with Ruby.</p>
              <span className="categories"><i className="fa fa-tag" />React, Ruby On Rails</span>
            </div>
            <div className="link-box">
              <a href="http://maddening-cake.surge.sh/">(App)erture</a>
              <a href="https://github.com/MarkhamJames/Apperture">___Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}