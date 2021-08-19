import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import blackhole from '../csacad-work/blackhole.png';
import neonSunset from '../csacad-work/neonSunset.png';
import inkRuns from '../csacad-work/inkRuns.png';
import quartz from '../csacad-work/quartz.png';
import snowflake from '../csacad-work/snowflake.gif';
import whirlpool from '../csacad-work/whirlpool.gif';
import dunes from '../csacad-work/dunes1.gif';
import kaleidoscope from '../csacad-work/kaleidoscope.gif';

var imageStyle = {
    flex: 1,
    width: 220,
    height: 220,
    resizeMode: 'contain'
}



function Art() {

  return(
    <Jumbotron className="py-5" style={{backgroundColor : 'black'}}>
      <Container>
        <Row>
          <Col>
            <img src={blackhole} style = {imageStyle} alt="fireSpot"/>
          </Col>
          <Col>
            <img src={neonSunset} style = {imageStyle} alt="fireSpot"/>
          </Col>
          <Col>
            <img src={inkRuns} style = {imageStyle} alt="fireSpot"/>
          </Col>
          <Col>
            <img src={quartz} style = {imageStyle} alt="fireSpot"/>
          </Col>
          <Col>
            <img src={snowflake} style = {imageStyle} alt="fireSpot"/>
          </Col>
          <Col>
            <img src={whirlpool} style = {imageStyle} alt="fireSpot"/>
          </Col>
          <Col>
            <img src={dunes} style = {imageStyle} alt="fireSpot"/>
          </Col>
          <Col>
            <img src={kaleidoscope} style = {imageStyle} alt="fireSpot"/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );

}

export default Art;