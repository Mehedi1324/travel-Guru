import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const MessageForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kqao65l',
        'template_enp5fxy',
        form.current,
        '85d415elI-p0bIdzf'
      )
      .then(
        (result) => {
          alert('Message successfully sent');
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="msg__form">
      <div className="title">
        <h1>Leave us a message</h1>
        <h2></h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form">
          <div className="name">
            <input type="text" placeholder="First Name*" name="user_name" />
            {/* <input type="text" placeholder="Last Name*" /> */}
          </div>
          <div className="name">
            <input name="user_email" type="email" placeholder="Email address" />
            <input type="number" placeholder="Mobile Number" />
          </div>
          <div className="name comment">
            <textarea name="message" cols={12} rows={5} placeholder="Message" />
          </div>
          <div className="button">
            <input type="submit" value="Send message" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
