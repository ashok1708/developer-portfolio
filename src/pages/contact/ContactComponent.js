import React, { Component} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import {greeting} from '../../portfolio';
import {Fade} from 'react-reveal';
import './ContactComponent.css';




const addressSection = {
	title: "Address",
	subtitle:
		"174, Kumharo ka Bass, Bhagat ki Kothi, Jodhpur (Rajasthan) - 342005",
	avatar_image_path: "address_image.svg",
	location_map_link: "https://goo.gl/maps/FLwTigkFCG95coaJ9"
};

const phoneSection = {
    title: "Phone Number",
    subtitle: "+91 9509856067"
}

const ContactData = {
	title: "Contact Me",
    profile_image_path: "ashok_pic.png",
    description: "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Android, Cloud and Opensource Development."
};

class Contact extends Component {
    render() {
        return (
					<div className="contact-main">
						<Header />
						<div className="basic-contact">
							<Fade bottom duration={1000} distance="40px">
								<div className="contact-heading-div">
									<div className="contact-heading-img-div">
										<img
											src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="contact-heading-text-div">
										<h1 className="contact-heading-text">
											{ContactData["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{ContactData["description"]}
										</p>
										<SocialMedia />
										<div className="resume-btn-div">
											<Button
												text="See My Resume"
												newTab={true}
												href={greeting.resumeLink}
											/>
										</div>
									</div>
								</div>
							</Fade>
							
							<Fade bottom duration={1000} distance="40px">
								<div className="address-heading-div">
									<div className="contact-heading-img-div">
										<img
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="address-heading-text-div">
										<h1 className="address-heading-text">
											{addressSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{addressSection["subtitle"]}
										</p>
										<h1 className="address-heading-text">
											{phoneSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{phoneSection["subtitle"]}
										</p>
										<div className="address-btn-div">
											<Button
												text="Visit on Google Maps"
												newTab={true}
												href={addressSection.location_map_link}
											/>
										</div>
									</div>
								</div>
							</Fade>
						</div>
						<Footer />
					</div>
				);
    }
}

export default Contact;