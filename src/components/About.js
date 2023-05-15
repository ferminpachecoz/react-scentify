import React from 'react';

export default function About() {
  return (
    <section id="about" class="about_area pt-95">
        <div class="about_shape d-none d-lg-block">
            <img src="images/about_shape.svg" alt="shape" />
        </div> {/* about shape */}
        <div class="about_image d-flex align-items-center align-items-center justify-content-end">
            <div class="image">
                <img src="images/Scentify - 5.jpeg" alt="about" />
            </div>
        </div> {/* about image */}
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-6">
                    <div class="about_content">
                        <div class="section_title pb-25">
                            <h4 class="title">Scentify</h4>
                            <p>Ofrecemos un aromatizante llamado Scentify, el cual lo fabricamos artesanalmente, utilizando resina al agua, esencia concentrada y moldes de silicona para otorgarle el formato y aroma que elegimos. Con los integrantes del grupo decidimos lanzar dos líneas de aromatizantes, una para ambientes y otra para autos, con el fin de abarcar la mayor cantidad del mercado. Sin embargo, este producto puede ser utilizado en cualquier espacio y es ideal para mantener un ambiente fresco y agradable.</p>
                        </div>
                        <a href="#" class="main-btn">Leer Más</a>
                    </div> {/* about content */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>
  )
}
