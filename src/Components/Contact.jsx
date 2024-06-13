import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

const Form = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_project: ''
  });

  // State to hold contact message
  const [contactMessage, setContactMessage] = useState('');

  // Reference for the form element
  const formRef = useRef();

  // useInView hook to track visibility of the contact section
  const [ref, inView] = useInView({ threshold: 0.5 });

  // Define animations for contact form using useSpring
  const formAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-100px)',
    config: { duration: 2000 },
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6tc08mm',
        'template_6l5fomd',
        formRef.current,
        'tAOK-Tbp1S3gFjS1U'
      )
      .then(
        () => {
          // Show success message
          setContactMessage('Message sent successfully 👌');

          // Remove message after five seconds
          setTimeout(() => {
            setContactMessage('');
          }, 5000);

          // Clear input fields
          setFormData({
            user_name: '',
            user_email: '',
            user_project: ''
          });
        },
        () => {
          // Show error message
          setContactMessage('Message not sent (service error) ❌');
        }
      );
  };

  return (
    <div>
      {/* <!--==================== CONTACT ====================--> */}
      <section className="contact section" id="contact" ref={ref}>
        <animated.div style={formAnimationProps} className="contact__container container grid">
          <h3 className="section__subtitle">
            Get In <span>Touch</span>
          </h3>

          <h2 className="section__title">Contact Me</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="contact__form" id="contact-form">
            <div className="contact__group">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="contact__input"
                value={formData.user_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="contact__input"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="user_project"
              required
              placeholder="Enter your message"
              className="contact__input"
              value={formData.user_project}
              onChange={handleChange}
            ></textarea>

            <p className="contact__message" id="contact-message">{contactMessage}</p>
            <button type="submit" className="button contact__button">
              Send Message
            </button>
          </form>
        </animated.div>
      </section>
    </div>
  );
};

export default Form;
