import React from 'react'



import thumbsImg from "../../public/images/testimonials/thumbs/1.png"


import MainNavbar from '@/components/MainNavbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Head from 'next/head'
import PageHeader from '@/components/PageHeader'
import HarshulImg from "../../public/images/team/Harshul.jpg"
import DavidImg from "../../public/images/team/David.jpg"
import linkedin from "../../public/images/linkedin.png"


const AboutPage = () => {
  return (
    <>
    <Head>
                <meta name="description" content="Dair Capture." />
                <meta name="keywords" content="Dair Capturen" />
                <meta name="author" content="Dair Capture" />
                <meta name="copyright" content="Dair Capture" />
                <meta name="robots" content="follow" />
                <title>Team | Dair Capture </title>
            </Head>



      <div className='wrapper'>
        <MainNavbar />

        <PageHeader
          title="Meet Our Team"
          description="The Visionaries Driving Carbon Innovation" />


        {/* <section id="about" class="about-layout3 pt-130 pb-40">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div class="heading mb-30">
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    <h2 class="heading__subtitle mb-0">Timely Service Delivery &amp; Incident Resolutions!! </h2>
                  </div>
                  <h3 class="heading__title mb-40">Dair Capture: Closing the Carbon Cycle </h3>
                </div>
              </div>
            </div>
            <div class="row about__Text">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                <i class="icon-quote"></i>
                <p>SmartData has been helping organizations throughout the World to manage their IT with our unique approach
                  to technology management and consultancy solutions. Provide users with appropriate view and access
                  permissions to requests, problems, changes, contracts, assets, solutions, and reports </p>
           
              </div>

            </div>

          </div>
        </section> */}




        <section class="about-layout1">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading mb-30">
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    {/* <h2 class="heading__subtitle mb-0">Timely Service Delivery & Incident Resolutions!! </h2> */}
                  </div>
                  <h3 class="heading__title mb-40"> Harshul Thakkar, PhD <br />CEO
                  </h3>
                </div>
                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">
                    Harshul has 9+ years of direct air capture experience, 3+ years of entrepreneurship (former co-founder) and Los Alamos National Lab (LANL) experience each. Dr. Thakkar&apos;s publications on CO2 capture from ultra/dilute conditions have garnered more than 1600 citations and 3 patents (one from LANL). He also won best “Lab Category” award by a Venture Studio on his CO2 separation technology in 2023.
                  </p>


                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={HarshulImg} alt="about" />
                  <blockquote class="blockquote d-flex align-items-end mb-0">
                    <div class="blockquote__avatar">
                     <a href='https://www.linkedin.com/in/harshul-thakkar-b494aa76/' target='_blank' ><Image src={linkedin} alt="thumb" /></a>
                    </div>
                    <div class="blockquote__content">

                      <h4 class="blockquote__title mb-0">Harshul Thakkar, PhD</h4>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section class="about-layout1">
          <div class="container">
            <div class="row">

              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={DavidImg} alt="about" />
                  <blockquote class="blockquote d-flex align-items-end mb-0">
                    <div class="blockquote__avatar">
                    <a href='https://www.linkedin.com/in/durtecho/' target='_blank' ><Image src={linkedin} alt="thumb" /></a>
                    </div>
                    <div class="blockquote__content">
                      <h4 class="blockquote__title mb-0"> David Urtecho, MBA
                      </h4>
                    </div>
                  </blockquote>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading mb-30">
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    {/* <h2 class="heading__subtitle mb-0">Timely Service Delivery & Incident Resolutions!! </h2> */}
                  </div>
                  <h3 class="heading__title mb-40">  David Urtecho, MBA <br />CMO
                  </h3>



                </div>
                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">
                    David Urtecho is a Business Development professional specializing in digital marketing and strategic management. He has more than three years of experience in consulting and private equity. 
                     His responsibilities include market research, financial modeling, risk assessment, and portfolio management. He also has experience as an entrepreneur in FedTech&apos;s startup studio, where he commercialized technology from national labs. He has an M.A. in Bioethics from Loyola Marymount University and a B.A. in Philosophy and Religious Studies from Cal State Fullerton.
                  </p>


                </div>
              </div>

            </div>
          </div>
        </section>







        {/* <section className="team-layout1 text-center pb-40">
          <div className="container">
            <div className="row">

              {TeamData.map((item, index) => (
                <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
                  <div className="member">
                    <div className="member__img">
                      <Image src={item.Image} alt="member img" />
                      <div className="member__hover">
                        <div className="member__content-inner">
                          <ul className="social-icons  justify-content-center list-unstyled mb-0">
                            <li><a href={item.LinkedIn} target='_blank'><i className="fab fa-linkedin"></i></a></li>
                            <li><a href={`mailto:${item.Email}`} target='_blank'><i className="fa fa-envelope"></i></a></li>
                            <li><a href={item.Twitter} target='_blank'><i className="fab fa-twitter"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="member__info">
                      <h5 className="member__name">{item.Name}</h5>
                      <p className="member__desc">{item.Designation}</p>
                    </div>
                  </div>
                </div>

              ))}

            </div>

          </div>
        </section> */}


        <Footer />




      </div>
    </>
  )
}

export default AboutPage