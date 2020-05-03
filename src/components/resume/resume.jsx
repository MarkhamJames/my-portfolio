import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      {<section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>General Assembly</h3>
                <p className="info">Software Engineering Immersive </p>
                <p>
                Learned Command Line, Git, Github, HTML, CSS, Javascript, Node.js, React.js, PostGresSQL, Express, Ruby, OnRails, database structure, API's, Big-O, algorithm types.
                </p>
                <p>
                Completed five projects, built with React.js, Express, and On rails. Two of these were collaborative efforts with fellow students while navigating workflow.
                </p>
                <p>
                Learned how to troubleshoot and test faulty applications.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>SUNY College at Old Westbury</h3>
                <p className="info">B.S. in Accounting</p>
                
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>General Assembly</h3>
                <p className="info">Software Engineering Fellow <span>•</span> <em className="date">September 2019 - December 2019</em></p>
                <p>
                  See Above
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>US Navy</h3>
                <p className="info">Sonar Technician <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                <p>
                Operate (manipulate, control, evaluate, and interpret data) surface sonar and other oceanographic systems.
                </p>
                <p>
                Utilizing knowledge of system operations to prepare ship's crew in qualifying for numerous certifications, resulting in the ship's crew being able to get underway for three deployments.
                </p>
                <p>
                Perform organizational and intermediate maintenance on surface sonar and allied equipment.
                </p>
                <p>
                Saved employer over $10,000.00 in various replacement parts through troubleshooting and identifying system faults.
                </p>
                <p>
                Perform repairs on various electromagnetic systems ensuring optimal performance of ships equipment.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
         {/* End skills */}
      </section>}
      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}
