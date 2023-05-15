import React from 'react'

export default function VideoTutorial() {
  return (
    <section id="tutorial" className="features_area pt-95">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9">
                    <div className="section_title text-center pb-25">
                        <h4 className="title">Video Tutorial</h4>
                        <p>Descubre cómo nuestros productos pueden llenar tus espacios de agradables fragancias y brindarte una experiencia única.</p>
                    </div>
                </div>
            </div> {/* row */}
            <div className="row text-center justify-content-center">
                <video width="800px" height="500px" controls>
                    <source src="images/Scentify - 3.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div> {/* row */}
        </div> {/* container */}
    </section>
  )
}
