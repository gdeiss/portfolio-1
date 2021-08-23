import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import blackhole from '../csacad-work/blackhole.png';
import snowflake from '../csacad-work/snowflake.gif';
import whirlpool from '../csacad-work/whirlpool.gif';
import dunes from '../csacad-work/dunes1.gif';

var images = [ blackhole, snowflake, whirlpool, dunes ]

var imageStyle = {
    flex: 1,
    width: 140,
    height: 140,
    resizeMode: 'contain'
}

var index = Math.floor(Math.random() * images.length)

function Hero(props) {

  return(
    <Jumbotron>
      <Container className="justify-content-md-center">
          <Row className="justify-content-md-center">
            <div class='col' style={{padding: "20px 0px 0px 40px", position : "relative"}}>
              <img src={images[index]} style = {imageStyle} alt="fireSpot"/>
            </div>
            <div class='col-9'>
              <Row>
                <h2 style={{ color: 'white', fontSize:'2em', padding: "40px 0px 0px 0px" }}> Student @ Carnegie Mellon University</h2>
              </Row>
              <Row>
                <h2 style={{ color: 'white', fontSize:'1.25em', padding: "0px 0px 0px 0px" }}> Statistics & Machine Learning</h2>
              </Row>
              <Row>
                <h2 style={{ color: 'white', fontSize:'1.2em', padding: "0px 0px 0px 0px" }}> Game Design</h2>
              </Row>
            </div>
          </Row>
        <Row>
          <p style={{ color: 'white', fontSize:'1em', padding: "30px 50px 0px 0px", marginLeft :"40px" }}>     I am a student at Carnegie Mellon University studying Statistics & Machine Learning with a minor in Game Design. You may have read that above. </p>
        </Row>
        <Row>
          <p style={{ color: 'white', fontSize:'1em', padding: "10px 50px 0px 0px", marginLeft :"40px" }}>     Outside of schoolwork I enjoy music, games, reading, and running. </p>
        </Row>
        <Row>
          <p style={{ color: 'white', fontSize:'1em', padding: "10px 50px 0px 0px", marginLeft :"40px" }}>     Outside of music, games, reading, and running, I enjoy schoolwork. My chief interest lies in Data Science. I love the blend of the technical aspects of Machine Learning, modelling, etc. with the more creative process of visualizing data and writing a report. </p>
        </Row>
        <Row>
          <p style={{ color: 'white', fontSize:'1em', padding: "10px 50px 0px 0px", marginLeft :"40px" }}>     My primary languages are Python, R, and English, but I'm also familiar with Java, SQL, and enough Javascript to make this website. I'm always excited to learn about more languages, libraries, and tools. </p>
        </Row>
        <Row>
          <p style={{ color: 'white', fontSize:'1em', padding: "10px 70px 0px 0px", marginLeft :"40px" }}>     I'd be happy working for any company with a good culture and a good mission. I'm currently a student worker at CMU's computer science academy, an online curriculum focused on making CS education more fun accessible to students who wouldn't otherwise have the resources to learn programming. We use our own custom graphics package to make exercises grounded in engaging visuals. Some of the exercises & art I've made can be viewed under the projects tab, in addition to some data science projects.  </p>
        </Row>
      </Container>
    </Jumbotron>
  );

}

export default Hero;
