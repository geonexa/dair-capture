import React, { useEffect, useState } from 'react'



import MainNavbar from '@/components/MainNavbar';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import PageHeader from '@/components/PageHeader';
import About2 from "../../public/images/about/about-2.jpg"
import Img1 from "../../public/images/technology/1.jpg"
import Img2 from "../../public/images/technology/2.jpg"
import Img3 from "../../public/images/technology/3.jpg"
import Img4 from "../../public/images/technology/4.jpg"
import Img5 from "../../public/images/technology/5.jpg"
import Img6 from "../../public/images/technology/6.jpg"
import About4 from "../../public/images/about/about-4.jpg"
import Footer from '@/components/Footer';




const ProjectsPage = () => {




    return (
        <>

<Head>
                <meta name="description" content="Dair Capture." />
                <meta name="keywords" content="Dair Capturen" />
                <meta name="author" content="Dair Capture" />
                <meta name="copyright" content="Dair Capture" />
                <meta name="robots" content="follow" />
                <title>Technology | Dair Capture </title>
            </Head>

  

            <div className='wrapper'>
                <MainNavbar />


                <PageHeader
                    title="Our Technology"
                    description="Leading the Way in Carbon Capture Innovation" />

                <section id="about" class="about-layout2 animated-Progressbars">
                    <div class="container">

                        <div class="row about__Text">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">

                                <div class="heading mb-40">
                                    <div class="d-flex align-items-center mb-20">
                                        <div class="divider divider-primary mr-30"></div>
                                        <h2 class="heading__subtitle mb-0">Innovative Carbon Capture Technology </h2>
                                    </div>
                                    <h3 class="heading__title mb-40"> Transforming CO2 with Energy-Efficient and Sustainable Solutions
                                    </h3>
                                </div>

                                <div class=" position-relative">


                                    <i class="icon-quote"></i>


                                    <p>At Dair Capture, we are committed to closing the carbon cycle and driving the transition to a sustainable future. Our innovative technology is at the forefront of this mission, delivering energy-efficient, renewable, and transformative solutions for carbon capture and utilization.</p>

                                    <p>At Dair Capture, we pride ourselves on pioneering cutting-edge technology in the realm of carbon capture and utilization.
                                        Our novel regeneration method sets us apart, offering unprecedented energy efficiency and the ability to transform captured CO2 into valuable products.
                                        Here&apos;s how our technology stands out: </p>
                                </div>


                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1">
                                <Image src={About2} alt="about" />

                            </div>
                        </div>
                    </div>
                </section>

                <section class="blog blog-single pt-50 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="post-item mb-0">
                                    <div class="post__content">
                                        <h1 class="post__title">
                                            Building the Future of Direct Air Capture
                                        </h1>
                                        <div class="post__desc">
                                            <p>Direct Air Capture (DAC) is a pioneering carbon removal technology that utilizes advanced industrial equipment to filter CO2 directly from the atmosphere. This method is not only measurable and verifiable but also highly adaptable, allowing for integration with diverse storage solutions to ensure the permanent removal of CO2. By implementing DAC technology, we are taking significant strides toward mitigating climate change and building a sustainable future.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="post-item mb-0">
                                    <div class="">
                                        <Image src={About4} alt="blog image" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>



                {/* <section className="portfolio-grid portfolio-grid-carousel pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="heading mb-50">
                                    <div className="d-flex align-items-center">
                                        <div className="divider divider-primary mr-30"></div>
                                        <h2 className="heading__subtitle mb-0">Our Technology</h2>
                                    </div>
                                    <h3 className="heading__title mb-0">Where innovation meets sustainability, and the future is carbon-neutral.</h3>
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
                                            Renewable
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
                                            Energy-Efficient
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
                                            Stable Sorbent
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
                                            Eco-System
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
                                            Transforming CO2
                                        </h4>
                                        <p className="portfolio__desc">Beyond sequestration, our DAC technology excels in transforming captured CO2 into value-added products. This capability opens up new possibilities for utilizing CO2 in various industries, creating economic value while addressing environmental challenges.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4" >
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={Img6} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <div className="portfolio__cat">

                                        </div>
                                        <h4 className="portfolio__title">
                                            Measurement, Monitoring, Reporting, and Verification
                                            (MMRV)
                                        </h4>
                                        <p className="portfolio__desc">MMRV is a multi-step process used to account for the greenhouse gas (GHG) emissions
                                            and emissions intensity associated with specific sources across the value chain.</p>
                                    </div>
                                </div>

                            </div>






                        </div>
                    </div>
                </section> */}

                










                <Footer />
            </div>
        </>
    )
}

export default ProjectsPage