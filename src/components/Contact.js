import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact_area pt-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact_info mt-45">
                        <div className="section_title pb-15">
                            <h4 className="title">Ponte en Contacto</h4>
                            <p>Por favor, completa el siguiente formulario de contacto y nos pondremos en contacto contigo lo antes posible. Si tienes alguna pregunta o comentario, no dudes en escribirnos.</p>
                        </div>
                        <div className="single_info d-flex align-items-center mt-15">
                            <div className="info_icon">
                                <i className="lni lni-phone"></i>
                            </div>
                            <div className="info_content media-body">
                                <p>+54 11 6110 7112</p>
                                <p>+54 11 2376 8870</p>
                            </div>
                        </div> {/* single info */}
                        
                        <div className="single_info d-flex align-items-center mt-15">
                            <div className="info_icon">
                                <i className="lni lni-envelope"></i>
                            </div>
                            <div className="info_content media-body">
                                <p>scentifyaromatizante@gmail.com</p>
                            </div>
                        </div> {/* single info */}
                    </div> {/* contact info */}
                </div>
                <div className="col-lg-8">
                    <div className="contact_form pt-20">
                        <form id="contact-form" action="assets/contact.php" method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single_form mt-30">
                                        <input type="text" name="name" placeholder="Nombre" />
                                    </div> {/* single form */}
                                </div>
                                <div className="col-md-6">
                                    <div className="single_form mt-30">
                                        <input type="email" name="email" placeholder="Email" />
                                    </div> {/* single form */}
                                </div>
                                <div className="col-md-6">
                                    <div className="single_form mt-30">
                                        <input type="text" name="number" placeholder="Numero de Telefono" />
                                    </div> {/* single form */}
                                </div>
                                <div className="col-md-6">
                                    <div className="single_form mt-30">
                                        <input type="text" name="subject" placeholder="Aroma de la Esencia" />
                                    </div> {/* single form */}
                                </div>
                                <div className="col-md-12">
                                    <div className="single_form mt-30">
                                        <textarea name="message" placeholder="Mensaje"></textarea>
                                    </div> {/* single form */}
                                </div>
                                <p className="form-message"></p>
                                <div className="col-md-12">
                                    <div className="single_form mt-30">
                                        <button className="main-btn">Enviar</button>
                                    </div> {/* single form */}
                                </div>
                            </div> {/* row */}
                        </form>
                    </div> {/* contact form */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>
  )
}
