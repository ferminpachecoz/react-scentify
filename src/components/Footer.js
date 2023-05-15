import React from 'react';

export default function Footer() {
  return (
    <section id="footer" className="footer_area">
        <div className="footer_widget pt-50 pb-100">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="footer_about mt-50">
                            <a href="#">
                                <img src="images/logo-scent.png" alt="logo" />
                            </a>
                            <p>Somos una empresa de aromaterapia comprometida con productos naturales y ecológicos para crear ambientes agradables y relajantes en hogares y espacios de trabajo.</p>
                            <ul className="social">
                                <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="#"><i className="lni lni-instagram-original"></i></a></li>
                                <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                            </ul>
                        </div> {/* footer about */}
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_link_wrapper d-flex flex-wrap">
                            <div className="footer_link mt-45">
                                <h4 className="footer_title">Soporte</h4>
                                <ul className="link">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#features">Caracteristicas</a></li>
                                    <li><a href="#about">Acerca</a></li>
                                    <li><a href="#product_features">Composicion</a></li>
                                    <li><a href="#tutorial">Tutorial</a></li>
                                    <li><a href="#contact">Contacto</a></li>
                                </ul>
                            </div> {/* footer link */}
                        </div> {/* footer link wrapper */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* footer widget */}
    </section>
  )
}
