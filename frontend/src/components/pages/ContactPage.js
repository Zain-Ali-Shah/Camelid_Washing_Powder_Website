import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
	return (
		<Container fluid>
			<Row className="contact-section">
				<h2>Contact Us</h2>
				<p>
					We offer home delivery all over Pakistan, with free delivery services
					available for customers in Rawalpindi and Islamabad. You can place
					your order by sending us Email or sending message on WhatsApp
				</p>
			</Row>
			<Row className="contact-info">
				<Col lg="3" className="my-5 mx-auto">
					<div className="contact-info-item ml-5">
						<p style={{ fontSize: "30px" }}>Contact Info</p>
						<p style={{ fontSize: "30px" }}>Let's Connect</p>
						<p>Get in touch with us to discuss your orders.</p>
					</div>
				</Col>
				<Col lg="3" className="my-5 mx-auto">
					<div className="contact-info-item">
						<p>
							<FontAwesomeIcon icon={faPhone} className="icon" /> 0313-5300181
						</p>
						<p>
							<FontAwesomeIcon
								icon={faWhatsapp}
								style={{
									color: "black",
									fontSize: "22px",
									marginRight: "8px",
								}}
							/>
							{"  "}
							0329-5478336
						</p>

						<p>
							<FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
							consumer@camelidwash.com
						</p>
						<p>
							<FontAwesomeIcon icon={faMapMarker} className="icon" /> Industrial
							Area I-9, Islamabad-Pakistan
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactPage;
