import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
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
            <Image src={blackhole} fluid/>
          </Col>
          <Col>
            <Image src={neonSunset} fluid alt="fireSpot"/>
          </Col>
          <Col>
            <Image src={inkRuns} fluid alt="fireSpot"/>
          </Col>
          <Col>
            <Image src={quartz} fluid alt="fireSpot"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={snowflake} fluid alt="fireSpot"/>
          </Col>
          <Col>
            <Image src={whirlpool} fluid alt="fireSpot"/>
          </Col>
          <Col>
            <Image src={dunes} fluid alt="fireSpot"/>
          </Col>
          <Col>
            <Image src={kaleidoscope} fluid alt="fireSpot"/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );

}

export default Art;
