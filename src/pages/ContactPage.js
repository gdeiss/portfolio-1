import React from 'react';
import Row from 'react-bootstrap/Row';


class ContactPage extends React.Component {

	render() {
		return(
		<div>
			<Row>
		        <h1 style={{color : 'white', fontSize : '5em', padding : "25px 0px 0px 75px"}}> Contact </h1>
			</Row>
			<Row>
				<p style={{color : 'white', padding : "0px 0px 0px 100px"}}> Email: gdeiss@andrew.cmu.edu </p>
				<p style={{color : 'white', padding : "0px 0px 0px 100px"}}> <a href="https://www.linkedin.com/in/gavin-deiss-b4627b173/">Linkedin</a> </p>
			</Row>
		</div>
			);
	}
}

export default ContactPage;