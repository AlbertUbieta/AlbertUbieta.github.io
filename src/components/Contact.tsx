import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

interface ContactProps {
  content: {
    title: string;
    description: string;
    recipientEmail?: string;
  };
}

function Contact({ content }: ContactProps) {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [formMessage, setFormMessage] = useState<string>('');

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const recipientEmail = content.recipientEmail?.trim();

    setNameError(!trimmedName);
    setEmailError(!trimmedEmail);
    setMessageError(!trimmedMessage);
    setFormMessage('');

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return;
    }

    if (!recipientEmail) {
      setFormMessage('The portfolio owner has not added a contact email yet.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${trimmedName}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail / phone: ${trimmedEmail}\n\n${trimmedMessage}`
    );

    setFormMessage('Your email app should open with the message ready to review and send.');
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {formMessage && <p className="contact-form-message" role="status">{formMessage}</p>}
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;