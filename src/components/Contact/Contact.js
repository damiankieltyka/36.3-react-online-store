import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss';

const Contact = props => {
  return (
    <main className="container contact">
      <div className="row">
        <div className="col-12">
          <h2>Any questions?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 contactText">
          <p>
            Nulla facilisi nullam vehicula ipsum a arcu. Tellus elementum sagittis vitae et. Amet nisl purus in mollis nunc sed id semper. Rutrum quisque non tellus orci ac auctor augue. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.          </p>
        </div>
      </div>
      <div className="row formContainer">
        <div className="col-12 formWrapper">
          <form method="POST">
            <div className="row">
              <div className="col-12 col-md-6 inputItem">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-12 col-md-6 inputItem">
                <input type="email" name="mail-address" placeholder="Email" />
              </div>
              <div className="col-12 inputItem">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="col-12 inputItem">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <button
                type="submit"
                className="submitMessageInput backgroundBtn"
              >
                <FontAwesomeIcon icon="envelope" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
