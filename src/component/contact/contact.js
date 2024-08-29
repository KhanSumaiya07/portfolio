import React from "react";
import Button from "../button/button";

const Contact = () => {
  return (
    <div id="contact">
      <div class="contact-form-container sec-padding">
      <div class="heading">
          <h2>
            Contact<mark> Me</mark>{" "}
          </h2>
        </div>
        <form className="form-container" action="https://example.com/submit-form" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <Button
          text = {"Send Message"}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
