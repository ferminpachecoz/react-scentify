import React from 'react';

export default function Header() {
  return (
    <section className="header_area">
      <div className="header_navbar">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <nav className="navbar navbar-expand-lg">
                          <a className="navbar-brand" href="index.html">
                              <img src="images/logo-scent.png" alt="Logo" />
                          </a>
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="toggler-icon"></span>
                              <span className="toggler-icon"></span>
                              <span className="toggler-icon"></span>
                          </button>

                          <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                              <ul id="nav" className="navbar-nav ml-auto">
                                  <li className="nav-item active">
                                      <a className="page-scroll" href="#home">Home</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="page-scroll" href="#features">Caracteristicas</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="page-scroll" href="#about">Acerca</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="page-scroll" href="#product_features">Composicion</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="page-scroll" href="#tutorial">Tutorial</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="page-scroll" href="#contact">Contacto</a>
                                  </li>
                                  <li className="nav-item">
                                  <a href="https://www.instagram.com/_scentify/" className='page-scroll' target='_blank'><i className="lni lni-instagram-original"></i></a>
                                  </li>
                              </ul>
                          </div> {/* navbar collapse */}
                      </nav> {/*-- navbar -- */}
                  </div>
              </div> {/*-- row */}
          </div> {/*-- container */}
      </div> {/*-- header navbar */}

        <div id="home" className="header_hero d-lg-flex align-items-center">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      <div className="header_hero_content mt-45">
                          <h2 className="header_title">Transforma tu ambiente con <span>Scentify</span></h2>
                          <p>La combinación perfecta de resina al agua y esencias naturales. Crea un ambiente relajante y agradable con facilidad</p>
                          <a href="#contact" className="main-btn">Contactar</a>
                      </div> {/*-- header hero content */}
                  </div>
              </div> {/*-- row */}
            </div> {/*-- container */}
          <div className="header_shape bg_cover d-none d-lg-block" style={{backgroundImage: "url(images/header_shape.png)"}}></div> {/*-- header shape */}
          <div className="header_image d-flex align-items-center">
              <div className="image">
                  <img src="images/Scentify - 4.jpeg" alt="header image" />
                  <img src="images/dots.svg" alt="dots" className="dots" />
              </div> {/*-- image */}
          </div> {/*-- header image */}
        </div> {/*-- header hero */}
    </section>
  )
}
