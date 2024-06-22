"use client"
import React, { useEffect, useState } from 'react'
import backgroundImg from "../../public/images/contact/1.jpg"

import MainNavbar from '@/components/MainNavbar'

import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'


const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: 'Portfolio Website Contact Form', phone: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")


    useEffect(() => {
        const messageTimer = setTimeout(() => {
            setMessage('');
        }, 2000);

        return () => {
            clearTimeout(messageTimer);
        };
    }, [message]);


    const handleChange = ({ target }) =>
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));

    const onSubmit = async () => {


        const hasNullValue = Object.values(formData).some(value => value === null || value === '');
        if (hasNullValue) {
            setMessage('Please fill in all fields before submitting.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('/api/contact', formData, {
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            });

            if (response.status !== 200) {
                throw new Error('Failed to send message');
            }

            setIsLoading(false);
            setFormData({ name: '', email: '', subject: 'GeoNexa New Message', phone: '', message: '' });
            setMessage('Message Sent Successfully');
        } catch (error) {
            setIsLoading(false);
            setMessage('Error sending message:', error);
        }
    };



    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>


            <div className='wrapper'>
                <MainNavbar />
                <PageHeader 
                title="Contact Us"
                description="Connect with Dair Capture"/>


                



                <section className="contact-layout1 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-7 mb-3">
                                <div className="contact-form">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h4 className="contact-panel__title">Get In Touch</h4>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}

                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Contact Number" name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject"
                                                    name="subject" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb-20">
                                                <textarea className="form-control" placeholder="Message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}></textarea>
                                            </div>

                                            <button onClick={onSubmit}
                                                disabled={isLoading}
                                                style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
                                                type="submit" className="btn btn__primary btn__xhight mt-10">Send Message </button>


                                            <div className="contact-result">
                                                <p>{message}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 mb-3">
                                <div className="contact-info d-flex flex-column justify-content-between"
                                    style={{
                                        backgroundImage: `url(${backgroundImg.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >

                                    <div>
                                        {/* <h4 className="contact-info__title">Book a call with our team​</h4> */}
                                        <p className="contact-info__desc">At Dair Capture, we value your inquiries and feedback. Whether you have questions about our innovative carbon capture technology, want to learn more about our services, or are interested in collaborating with us, we are here to help. Reach out to us through the form below or via our contact details, and a member of our team will get back to you promptly. Let&apos;s work together to close the carbon cycle and build a sustainable future.</p>
                                        {/* <p className="contact-info__desc">
                                            email: aman.chaudhary@iitgn.ac.in
                                        </p>
                                        <p className="contact-info__desc">
                                            Mobile: +91 9084844024
                                        </p> */}
                                    </div>
                                    <Link href="/" className="btn btn__white btn__bordered btn__icon">
                                        <span>Download Brochure</span>
                                        <i className="icon-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>





                {/* <section className="contact-layout2 pt-0 pb-80">
        <div className="container">
          <div className="row">

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">London Office</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>Email: <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a></li>
                  <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                  <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                  <li>Hours: Mon-Fri: 8am – 7pm</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">Berlin Office</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>Email: <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a></li>
                  <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                  <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                  <li>Hours: Mon-Fri: 8am – 7pm</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">Manchester Office</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>Email: <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a></li>
                  <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                  <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                  <li>Hours: Mon-Fri: 8am – 7pm</li>
                </ul>
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

export default ContactPage