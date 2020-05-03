import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="https://media-exp2.licdn.com/dms/image/C4E03AQGmqkaCKDlQPg/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=U4lJu5HUvXbvQmmPShQnQKmRW02bLZInPUc8hV-SYiY" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>New York based software engineer with a passion for problem solving and cutting edge technology. After traveling the globe and immersing myself in new environments, I decided to create immersive environments... universes infact, for the masses to immerse themselves in. See you out there!
            </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>James Markham</span><br />
                    <span>New York, NY</span><br />
                    <span>(631)494-5715</span><br />
                    <span>jamesmarkham8224@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://docdro.id/VfQKYJT" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}