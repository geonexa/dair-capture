import React, { useRef } from "react";
import Head from "next/head";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import BackgroundIMg from "../../public/images/backgroundVideo.gif";
// import Img1 from "../../public/images/projects/image.jpg";
import AboutImg1 from "../../public/images/about/about-3.jpg";

import baackground1 from "../../public/images/backgrounds/14.jpg";
import Img1 from "../../public/images/technology/1.jpg"
import Img2 from "../../public/images/technology/2.jpg"
import Img3 from "../../public/images/technology/3.jpg"
import Img4 from "../../public/images/technology/4.jpg"
import Img5 from "../../public/images/technology/5.jpg"
import Img6 from "../../public/images/technology/6.jpg"
import reporting from "../../public/images/technology/reporting.png"
import measurement from "../../public/images/technology/measurement.png"
import monitoring from "../../public/images/technology/monitor.png"
import verification from "../../public/images/technology/verification.png"


import Image from "next/image";

const HomePage = () => {
    const aboutProgressRef = useRef(null);

    return (
        <>
            <Head>
                <meta name="description" content="Dair Capture." />
                <meta name="keywords" content="Dair Capturen" />
                <meta name="author" content="Dair Capture" />
                <meta name="copyright" content="Dair Capture" />
                <meta name="robots" content="follow" />
                <title>Dair Capture | Closing the Carbon Cycle </title>
            </Head>

            <div className="wrapper">
                <MainNavbar />





                <section className="slider">

                    <div className='video_bg_container'>
                        <video loop muted autoPlay  >
                            <source src="/images/video_bg.mp4" type="video/mp4"
                            />
                        </video>


                        <div className="container video_bg_writeup">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                                    <div className="slide__content">
                                        <p className="slide__desc" style={{ color: "#f3bf3d" }}>
                                            Dair Capture: Closing the Carbon Cycle
                                        </p>
                                        <h2 className="slide__title">
                                            Innovative Carbon Solutions for a Greener Planet
                                        </h2>

                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                aboutProgressRef.current.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start",
                                                });
                                            }}
                                            className="btn btn__primary btn__icon mr-30"
                                        >
                                            <span>More About Us</span>
                                            <i className="icon-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    {/* <div
                        style={{
                            backgroundImage: `url(${BackgroundIMg.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="slide-item align-v-h bg-overlay bg-overlay-gradient"
                    >
                        
                    </div> */}
                </section>




                <section id="about" class="about-layout2 animated-Progressbars" ref={aboutProgressRef}>
                    <div class="container">

                        <div class="row about__Text">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">

                                <div class="heading mb-40">

                                    <h3 class="heading__title"> Why Dair Capture? </h3>
                                    <div class="d-flex align-items-center  mb-40">
                                        <div class="divider divider-primary mr-30 "></div>
                                        <h2 class="heading__subtitle mb-0">Innovating for a Carbon-Neutral World</h2>
                                    </div>
                                </div>

                                <div class=" position-relative">


                                    <i class="icon-quote"></i>


                                    <p style={{ color: "black", fontWeight: 600, textAlign: "justify" }}>At Dair Capture, we are dedicated to revolutionizing the way we address carbon emissions. Our cutting-edge technology offers a sustainable, energy-efficient solution for capturing and transforming CO2. By leveraging renewable resources and our unique regeneration method, we provide an innovative approach to closing the carbon cycle, making a positive impact on the environment and driving the transition to a greener future. Choose Dair Capture for reliable, advanced, and eco-friendly carbon capture solutions.</p>

                                    {/* <p>At Dair Capture, we pride ourselves on pioneering cutting-edge technology in the realm of carbon capture and utilization.
                                        Our novel regeneration method sets us apart, offering unprecedented energy efficiency and the ability to transform captured CO2 into valuable products.
                                        Here&apos;s how our technology stands out: </p> */}
                                </div>


                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1">
                                <Image src={AboutImg1} alt="about" />

                            </div>
                        </div>
                    </div>
                </section>


                {/* <section class="banner-layout4 pt-130 pb-130">

                    <div class="container-fluid px-0">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6" style={{ padding: "0px" }}>
                                <Image src={AboutImg1} alt="banner" style={{ width: "100%" }} />
                            </div>

                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 " style={{ padding: "0px" }}>

                                <div style={{
                                    backgroundImage: `url(${BackgroundIMg.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    height: "100%"
                                }}


                                >
                                    <div class="inner-padding">

                                        <div class="heading heading-light mb-60">
                                            <h3 class="heading__title mb-30">
                                                Why Dair Capture?
                                            </h3>
                                            <h6 class="heading__title mb-30" style={{ fontSize: "20px", textAlign: "justify" }}>
                                                At Dair Capture, we are dedicated to revolutionizing the way we address carbon emissions. Our cutting-edge technology offers a sustainable, energy-efficient solution for capturing and transforming CO2. By leveraging renewable resources and our unique regeneration method, we provide an innovative approach to closing the carbon cycle, making a positive impact on the environment and driving the transition to a greener future. Choose Dair Capture for reliable, advanced, and eco-friendly carbon capture solutions.
                                            </h6>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}




                {/* <section className="services-layout2 services-carousel pt-130 bg-gray">
                    <div className="container">
                        <div className="row heading mb-40">
                            <div className="col-lg-12">
                                <div className="d-flex align-items-center">
                                    <div className="divider divider-primary mr-30"></div>
                                    <h2 className="heading__subtitle mb-0">Why Dair Capture?</h2>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <h3 className="heading__title">
                                    Offering the latest software and IT services to our customers!
                                </h3>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <p className="heading__desc">
                                    Improve efficiency, leverage tech, and provide better customer
                                    experiences with the modern technology services available
                                    allover the world. Our skilled personnel, utilising the latest
                                    processing software, combined with decades of experience.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="service-item">
                                    <div className="service__content">
                                        <div className="service__icon">
                                            <i className="icon-agriculture"></i>
                                        </div>
                                        <h4 className="service__title">
                                            IT Management <br /> Services
                                        </h4>
                                        <p className="service__desc">
                                            IT management service that manages and oversees the IT
                                            infrastructure of any civil organization responsible for
                                            network and operations which includes data{" "}
                                        </p>
                                        <ul className="list-items list-unstyled mb-30">
                                            <li>Business IT alignment</li>
                                            <li> IT financial management</li>
                                            <li> IT service management</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item">
                                    <div className="service__content">
                                        <div className="service__icon">
                                            <i className="icon-cyberspace"></i>
                                        </div>
                                        <h4 className="service__title">
                                            Cyber Security
                                            <br /> Services
                                        </h4>
                                        <p className="service__desc">
                                            Drive your business and manage risk with a global industry
                                            leader in cybersecurity, cloud, and managed security
                                            services and extend your team with leading experts.
                                        </p>
                                        <ul className="list-items list-unstyled mb-30">
                                            <li>Internet security</li>
                                            <li>Automotive security</li>
                                            <li>Cyberwarfare</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="service-item">
                                    <div className="service__content">
                                        <div className="service__icon">
                                            <i className="icon-cloud-computing"></i>
                                        </div>
                                        <h4 className="service__title">
                                            Cloud Computing
                                            <br /> Services
                                        </h4>
                                        <p className="service__desc">
                                            Cloud computing is on-demand availability of computer
                                            system resources, especially data storage computing power,
                                            without direct active management by the user.
                                        </p>
                                        <ul className="list-items list-unstyled mb-30">
                                            <li>Private cloud services</li>
                                            <li>Public cloud services</li>
                                            <li>Hybrid cloud services</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-12 btn-wrapper">
                                <Link
                                    href="/technology"
                                    className="btn btn__secondary btn__bordered btn__icon"
                                >
                                    <span>Explore All Technologies</span>
                                    <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section> */}

                




                <section className="portfolio-grid portfolio-grid-carousel pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="heading mb-50">
                                    <div className="d-flex align-items-center">
                                        <div className="divider divider-primary mr-30"></div>
                                        <h2 className="heading__subtitle mb-0">Our Technology</h2>
                                    </div>
                                    <h3 className="heading__title mb-0">Our DAC <span style={{ color:"#0096FF", fontWeight:700}}>&quot;RESET&quot;</span> approach</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-lg-4" >
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={Img1} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <div className="portfolio__cat">

                                        </div>
                                        <h4 className="portfolio__title">
                                            <span style={{fontSize:"42px", color:"#0096FF", fontWeight:600}}>R</span>enewable
                                        </h4>
                                        <p className="portfolio__desc">Our Direct Air Capture (DAC) technology is designed to operate entirely on renewable resources. Unlike traditional methods, our DAC system does not rely on natural gas or steam, ensuring a sustainable and environmentally friendly approach to carbon capture.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4" >
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={Img2} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <div className="portfolio__cat">

                                        </div>
                                        <h4 className="portfolio__title">
                                        <span style={{fontSize:"42px", color:"#0096FF", fontWeight:600}}>E</span>nergy-Efficient
                                        </h4>
                                        <p className="portfolio__desc">Energy efficiency is at the core of our regeneration method. Our unique approach significantly reduces the energy required for the DAC process, making it more sustainable and cost-effective. This energy-saving advantage is a game-changer in the field of carbon capture.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4" >
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={Img3} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <div className="portfolio__cat">

                                        </div>
                                        <h4 className="portfolio__title">
                                        <span style={{fontSize:"42px", color:"#0096FF", fontWeight:600}}>S</span>table Sorbent
                                        </h4>
                                        <p className="portfolio__desc">Our technology features an extremely high stability of the sorbent due to our innovative regeneration method. This stability ensures the long-term reliability and effectiveness of our DAC system, providing consistent performance over time.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4" >
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={Img4} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <div className="portfolio__cat">

                                        </div>
                                        <h4 className="portfolio__title">
                                        <span style={{fontSize:"42px", color:"#0096FF", fontWeight:600}}>E</span>co-System
                                        </h4>
                                        <p className="portfolio__desc">The eco-system of our DAC is well-established and integrates seamlessly with existing infrastructure. This compatibility enhances the scalability and adoption of our technology, enabling wider implementation across various industries and applications.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4" >
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={Img5} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <div className="portfolio__cat">

                                        </div>
                                        <h4 className="portfolio__title">
                                        <span style={{fontSize:"42px", color:"#0096FF", fontWeight:600}}>T</span>ransforming CO2
                                        </h4>
                                        <p className="portfolio__desc">Beyond sequestration, our DAC technology excels in transforming captured CO2 into value-added products. This capability opens up new possibilities for utilizing CO2 in various industries, creating economic value while addressing environmental challenges.</p>
                                    </div>
                                </div>

                            </div>

                            
                        </div>
                    </div>
                </section>


                <section id="awards" class="awards pb-70">
                    <div class="container">
                        <div class="row heading mb-60">
                            <div class="col-12 d-flex align-items-center mb-20">
                                <div class="divider divider-primary mr-30"></div>
                                <h2 class="heading__subtitle mb-0">
                                    Timely Service Delivery & Incident Resolutions!!{" "}
                                </h2>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-5">
                                <h3 class="heading__title">
                                Measurement, Monitoring, Reporting, and Verification (MMRV)
                                </h3>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-2">
                                <p class="heading__desc">
                                MMRV is a multi-step process used to account for the greenhouse gas (GHG) emissions and emissions intensity associated with specific sources across the value chain.{" "}
                                </p>
                                {/* <a href="#" class="btn btn__primary btn__icon mt-20">
                                    <span>Get Started</span>
                                    <i class="icon-arrow-right"></i>
                                </a> */}
                            </div>
                        </div>
                        <div class="row awards-wrapper">
                            <div class="col-sm-6 col-md-6 col-lg-3">
                                <div class="fancybox-item">
                                    <div class="fancybox__icon-img">
                                        <Image src={measurement} alt="icon" />
                                    </div>
                                    <div class="fancybox__content">
                                        <h4 class="fancybox__title">Measurement</h4>
                                        {/* <p class="fancybox__desc">
                                            A web design & development award platform for digital
                                            folk, UI/UX peeps and inspiring leaders of the web.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3">
                                <div class="fancybox-item">
                                    <span class="pinned-ribbon"></span>
                                    <div class="fancybox__icon-img">
                                        <Image src={monitoring} alt="icon" />
                                    </div>
                                    <div class="fancybox__content">
                                        <h4 class="fancybox__title">Monitoring</h4>
                                        {/* <p class="fancybox__desc">
                                            Awards celebrates digital by honoring outstanding
                                            Websites, Web Marketing, Video, Sites, Apps & Social
                                            content.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3">
                                <div class="fancybox-item">
                                    <div class="fancybox__icon-img">
                                        <Image src={reporting} alt="icon" />
                                    </div>
                                    <div class="fancybox__content">
                                        <h4 class="fancybox__title">Reporting</h4>
                                        {/* <p class="fancybox__desc">
                                            Showcasing innovation every day since 2000, our mission is
                                            to showcase cutting edge creativity, regardless
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3">
                                <div class="fancybox-item">
                                    <div class="fancybox__icon-img">
                                        <Image src={verification} alt="icon" />
                                    </div>
                                    <div class="fancybox__content">
                                        <h4 class="fancybox__title">Verification</h4>
                                        {/* <p class="fancybox__desc">
                                            The awards that recognize the talent and effort of the
                                            best web designers, developers and agencies in the world.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="banner-layout1 pt-90 pb-90 bg-overlay bg-overlay-primary">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-inner d-flex flex-column justify-content-between">
                                <div className="heading heading-light">
                                    <h3 className="heading__title mb-30">How can we help?</h3>
                                    <p className="heading__desc mb-30">
                                        At Dair Capture, we&apos;re here to support you on your journey towards a sustainable future. Whether you&apos;re interested in learning more about our innovative carbon capture technology, have questions about our services, or are looking for ways to collaborate, we&apos;re ready to assist. Please fill out the form, and our dedicated team will respond promptly to address your inquiries and provide the information you need. Let&apos;s work together to close the carbon cycle and create a cleaner, greener world.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                <div className="contact-panel">
                                    <form className="contact-panel__form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="contact-panel__title mb-20">
                                                    Contact Us
                                                </h4>
                                                <p className="contact-panel__desc mb-30">
                                                    We are here to help and answer any question you might
                                                    have.
                                                </p>
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        id="contact-name"
                                                        name="contact-name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        id="contact-email"
                                                        name="contact-email"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="col-sm-6 col-md-6 col-lg-6">
                                                <div class="form-group">
                                                    <select class="form-control">
                                                        <option value="General">General</option>
                                                        <option value="Customer Service">Customer Service</option>
                                                        <option value="Careers">Careers</option>
                                                        <option value="Media">Media</option>
                                                    </select>
                                                </div>
                                            </div>


                                            {/* <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Subject"
                                                        id="subject"
                                                        name="subject"
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Contact Number"
                                                        id="Phone"
                                                        name="phone"
                                                    />
                                                </div>
                                            </div>





                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Message"
                                                        id="contact-message"
                                                        name="contact-message"
                                                    ></textarea>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="btn btn__primary btn__xl btn__block"
                                                >
                                                    Submit {" "}
                                                </button>
                                                <div className="contact-result"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default HomePage;
