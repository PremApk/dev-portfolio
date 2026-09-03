import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_nxrj92t",
      "template_jkqs4c3",
      e.target,
      "TDfkg8l7LueZ6CywQ"
    );
    e.target.reset();
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let&apos;s talk about platforms, AI, and shipping better software.</h3>
          <p className="contact__details">
            Prefer email? Write to{" "}
            <a href="mailto:connect.with.apk@gmail.com">
              connect.with.apk@gmail.com
            </a>
          </p>
          <p className="contact__meta">Mettur Dam, Salem, Tamil Nadu · +91 96770 70301</p>
        </div>

        <form action="" className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Your name"
                name="from_name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Your email"
                name="email_from"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Subject"
                name="email_subject"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
