import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          e.target.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <h3 className='form-title'>Send Me a Message</h3>

      <div className='input-group'>
        <FiUser className='input-icon' />
        <input type='text' name='from_name' placeholder='Your Name' required />
      </div>

      <div className='input-group'>
        <FiMail className='input-icon' />
        <input
          type='email'
          name='from_email'
          placeholder='Your Email'
          required
        />
      </div>

      <div className='input-group textarea-group'>
        <FiMessageSquare className='input-icon' />
        <textarea name='message' rows='5' placeholder='Your Message' required />
      </div>

      <button type='submit' className='send-btn'>
        <FiSend />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className='form-success'>Message sent successfully!</p>
      )}

      {status === 'error' && (
        <p className='form-error'>Failed to send message. Try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
