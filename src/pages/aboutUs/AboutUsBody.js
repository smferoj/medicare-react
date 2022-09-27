import React from 'react';
import './aboutUsBody.css';
import { Col, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AboutImgOne from '../../assets/images/about_img1.jpg';
import AboutImgTwo from '../../assets/images/about_img2.jpg';
import AboutImgThree from '../../assets/images/about_img3.jpg';
import Car from '../../assets/svg/Car';
import Doctor from '../../assets/svg/Doctor';
import Professional from '../../assets/svg/Professional';
import Treatment from '../../assets/svg/Treatment';


const AboutUsBody = () => {
    return (         
               <Container>  
                <Row >
                    <Col xl={6} lg={5} md={12}className='d-flex justify-content-between align-items-center'>
                        <div className="img_galary">
                            <div className="about_img_one">
                                <img src={AboutImgOne} className="img-fluid mx-auto d-block"  alt="About Img" />
                            </div>
                            <div className="about_img_two">
                                <img src={AboutImgTwo} className="img-fluid mx-auto d-block" alt="About Img" />
                            </div>
                            <div className="about_img_three">
                                <img src={AboutImgThree} className="img-fluid mx-auto d-block" alt="About Img" />
                            </div>
                            <div className="experience">
                                <h1> 20 </h1>
                                <p> Year Experience</p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={6} lg={7} md={12}>
                        <div className="about_details">
                            <div className="about_text">
                                <h5> About Us </h5>
                                <h1> The Great Place Of Medical Hospital Center</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nostrum at sit porro id fuga quidem</p>
                            </div>
                            <div className="about_items">
                                <div className="about_card">
                                     <Car/>
                                    <h4> Emergency Help</h4>
                                </div>
                                <div className="about_card">
                                   <Doctor/>
                                    <h4> Qualified Doctors</h4>
                                </div>
                                <div className="about_card">
                                    <Professional/>
                                    <h4> Best Professionals</h4>
                                </div>
                                <div className="about_card">
                                     <Treatment/>
                                    <h4> Medical Treatment</h4>
                                </div>
                            </div>
                            <button className='btn btn-primary'> <NavLink to="/">Read More</NavLink></button>
                        </div>
                    </Col>
                 </Row>
         
                </Container>
           

           
    )
}

export default AboutUsBody