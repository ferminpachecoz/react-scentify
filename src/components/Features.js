import React from 'react';

export default function Features() {
  return (
    <section id="features" className="features_area pt-95">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9">
                    <div className="section_title text-center pb-25">
                        <h4 className="title">Caracteristicas del Producto</h4>
                        <p>Descubre las características únicas de nuestro producto. Desde la resina al agua hasta las esencias aromáticas, cada detalle está diseñado para ofrecerte una experiencia excepcional.</p>
                    </div>
                </div>
            </div> {/* row  */}
            <div className="row text-center">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_features mt-30">
                        <i className="lni lni-camera"></i>
                        <h5 className="title">Aroma duradero</h5>
                        <p>Las pelotitas aromatizantes de nuestra marca están diseñadas para ofrecer un aroma duradero en tus espacios, lo que significa que no tendrás que cambiarlas con frecuencia.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_features mt-30">
                        <i className="lni lni-bolt"></i>
                        <h5 className="title">Variedad de Aromas</h5>
                        <p>Ofrecemos una amplia variedad de aromas naturales, cada uno de los cuales está diseñado para crear un ambiente específico en tus espacios.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_features mt-30">
                        <i className="lni lni-game"></i>
                        <h5 className="title">Eco-friendly</h5>
                        <p>Nuestro producto está hecho con resina al agua, lo que lo hace ecológico y libre de químicos dañinos para el medio ambiente.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_features mt-30">
                        <i className="lni lni-rocket"></i>
                        <h5 className="title">Facil de usar</h5>
                        <p>Fáciles de colocar en cualquier lugar gracias a su tamaño y envoltura en bolsa porosa para una liberación uniforme del aroma.</p>
                    </div>
                </div>
            </div> //-- row 
        </div> //-- container 
    </section>
  )
}
