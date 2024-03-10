import React from 'react'

import style from './about.css'

const AboutPage = (props) => {
  return (
    <div className="container">
      <h1>About Page</h1>
      <div className='sumonet'>
        <h2> What is SUMOnet?</h2>
        <p className="paragraph">The SUMOnet project aims to improve the user experience, user interface, and overall performance of a web application dedicated to
  predicting potential protein chains resulting from the SUMOylation process, which is implicated in genetic-based diseases such as
Alzheimer's, cancer, and diabetes. The project's objectives include transitioning from a single-page structure to a multi-page architecture to
reduce loading times, developing a Python-based backend for optimized data transfer, and enhancing the frontend through the
implementation of technologies like JavaScript and Next.js. The user experience will be refined by visualizing protein chains, instituting
feedback mechanisms, and conducting comprehensive testing, encompassing various test cases and user input.</p>
      </div>
      <br/>
      <div className='contact'>
        <h2>Contact Us:</h2>
        <p>Bülent Emin Üstün - eustun@sabanciuniv.edu </p>
        <p>Şevki Aybars Türel - aturel@sabanciuniv.edu </p>
        <p>Alper Mert - alpermert@sabanciuniv.edu</p>
       <p> Mehmet Eren Karabulut - mkarabulut@sabanciuniv.edu</p>
       <p> Öznur Taştan - otastan@sabanciuniv.edu </p>
      </div>
      <br/>
      <div className='cite'>
        <h2>Citation:</h2>
        <p className='paragraph'>If you use SUMOnet in your work please cite us:
        Dilekoglu, B., Tascioglu O.,: Sumonet: Deep sequential prediction of sumoylation sites. bioRxiv (2023).</p>
      </div>
    </div>
  )
}

export default AboutPage
