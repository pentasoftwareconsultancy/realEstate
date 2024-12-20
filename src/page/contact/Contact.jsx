import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div>
         <section className="section contact" aria-label="contact">
        <div className="container">

          <h2 className="h2 section-title">Have Question ? Get in touch!</h2>

          <p className="section-text">
            A great plateform to buy, sell and rent your properties without any agent or commisions.
          </p>

          <button className="btn btn-primary">
            <ion-icon name="call-outline"></ion-icon>

            <span className="span">Contact us</span>
          </button>

        </div>
      </section>
    </div>
  )
}

export default Contact