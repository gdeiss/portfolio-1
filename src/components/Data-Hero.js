import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import world from '../datasci/world.png';
import state from '../datasci/state.png';
import letters from '../datasci/letters.png';


var imageStyle = {
    flex: 1,
    width: 450,
    height: 220,
    resizeMode: 'contain'
}



function Art() {

  return(
    <Jumbotron className="py-5" style={{backgroundColor : 'black'}}>
      <Container>
        <Row>
          <Col>
            <h1 style={{color : 'white'}}> Visualizing Covid </h1>
            <h3 style={{color : 'white', fontSize : "1.5em"}}> November 2020 </h3>
            <p style={{color : 'white'}}> Group project for CMU course 36-315, Statistical Graphics & Visualizations. Each member created 2 interactive visuals of their choice using <a href="https://www.kaggle.com/imdevskp/corona-virus-report">this</a> time series dataset on Covid-19 in the US and the world in R. Our work was compiled into a tidyverse app that can be run from any web browser. It is currently in a private github repository to comply with course policy, but screenshots of my contributions can be seen below. On the left is a time series of deaths & hospitalizations overtime with resizable x-axis and the ability to hover over a specific date to get exact numbers of cases. On the right, a time series of cases by state in the US, with the ability to add and remove states from the graphic.</p>
          </Col>
        </Row>
        <Row>
          <Carousel variant='dark' nextLabel='' prevLabel='' prevIcon=''>
            <Carousel.Item>
              <img src={world} style={imageStyle} alt="fireSpot"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={state} style = {imageStyle} alt="fireSpot"/>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Col>
            <h1 style={{color : 'white', padding : "20px 0px 0px 0px"}}> Rap and R&B: Classification and Recommendation </h1>
            <h3 style={{color : 'white', fontSize : "1.5em"}}> May 2021 </h3>
            <p style={{color : 'white'}}> Data report fully viewable in Google Colab <a href="https://colab.research.google.com/drive/1GOMd4U0wFLBEQm4BTm64uGMuIEB4n21G#scrollTo=XMrcsQ0iC85_">here</a>. By scraping data from albumoftheyear.org, and using the Spotify API, we were able to build a recommender system for a given song and train a simple neural network to classify a song as either rap or R&B -two very similar genres- with 73% accuracy.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{color : 'white', padding : "20px 0px 0px 0px"}}> Letter Classification Neural Net </h1>
            <h3 style={{color : 'white', fontSize : "1.5em"}}> Sept 2019 </h3>
            <p style={{color : 'white'}}> Built a neural network in Python from scratch using only numpy to identify handwritten letters of the alphabet. A sigmoid activation function was used on the hidden layer, with softmax on the output. 15% error rate on testing set. </p>
          </Col>
        </Row>
        <Row>
          <div class='col-1'></div>
          <div class='col-md-auto'>
            <img src={letters} style = {imageStyle} alt="fireSpot"/>
          </div>
          <div class='col-1'></div>
        </Row>
      </Container>
    </Jumbotron>
  );

}

export default Art;
