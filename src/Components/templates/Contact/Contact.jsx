import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import Input from '../../molecules/Input/Input';
import Button from '../../atoms/Button/Button';
// import useForm from '../../../hooks/useForm';

const Wrap = styled.div`
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(0.5rem, 0.5rem + 10vw, 2rem);

  h2 {
    line-height: 1;
    font-family: 'Amatic SC', cursive;
    font-weight: 900;
    color: ${({ theme }) => theme.color.teal};
  }
`;

const Form = styled.form`
  border: 2px solid black;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.background};
  display: block;
  min-width: 250px;
  width: 100%;
  height: 100%;
  padding: 2rem;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
`;
const Contact = () => {
  /*   const formInitValue = { name: '', email: '', message: '' };
  const { handleChange, inputs } = useForm(formInitValue);
 */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_4fhedxn';
      const templateId = 'template_9mnagip';
      const userId = '7HBmPkIPblHWx2zco';
      const templateParams = {
        name,
        email,
        message
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  };
  return (
    <Wrap>
      <h2>Contact</h2>
      <Form onSubmit={submit}>
        <Input
          form
          placeholder="Full Name"
          name="name"
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          color="white"
          borderradius="10px 10px 0 0"
        />
        <Input
          form
          required
          placeholder="email"
          name="email"
          label="E-Mail*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color="white"
          borderradius="0 0 0 0"
        />

        <Input
          textArea
          required
          name="message"
          label="Your Message"
          placeholder="Be Nice :D"
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          color="white"
          borderradius="0 0 10px 10px"
        />

        <Button text="Send" type="submit" color="black" background="#6dbae4" width="97%" />
      </Form>
      {emailSent && <span>Thank you for your message, we will be in touch in no time!</span>}
    </Wrap>
  );
};

export default Contact;
