import React from 'react'

export const About = () => {
  return (
<>
<section className="section about-section gray-bg my-5" id="about">
  <div className="container ">
    <div className="row align-items-center justify-content-around flex-row-reverse">
      <div className="col-lg-6">
        <div className="about-text">
          <h3 className="dark-color">Do some awsome stuff with me.</h3>
          <h4 className="theme-color">UI / UX Designer &amp; Web Developer</h4>
          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores. My passion is to design digital user experiences
            through the bold interface and meaningful interactions.
          </p>
          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <div className="btn-bar">
            <a className="px-btn theme" href="#">
              View Works
            </a>
            <a className="px-btn theme-t" href="#">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-5 text-center">
        <div className="about-img">
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
        </div>
      </div>
    </div>
  </div>
</section>


</>

    )
}
