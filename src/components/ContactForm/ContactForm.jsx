import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    setStatus('sending');

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <motion.form
      onSubmit={handleSubmit(sendEmail)}
      className='contact-form'
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className='form-title'>Send Me a Message</h3>

      <div className='input-group'>
        <FiUser className='input-icon' />
        <input
          placeholder='Your Name'
          {...register('from_name', { required: 'Name is required' })}
        />
      </div>
      {errors.from_name && (
        <p className='form-error'>{errors.from_name.message}</p>
      )}

      <div className='input-group'>
        <FiMail className='input-icon' />
        <input
          placeholder='Your Email'
          {...register('from_email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
        />
      </div>
      {errors.from_email && (
        <p className='form-error'>{errors.from_email.message}</p>
      )}

      <div className='input-group textarea-group'>
        <FiMessageSquare className='input-icon' />
        <textarea
          placeholder='Your Message'
          row='5'
          {...register('message', { required: 'Message cannot be empty' })}
        />
      </div>
      {errors.message && <p className='form-error'>{errors.message.message}</p>}

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
    </motion.form>
  );
};

export default ContactForm;
