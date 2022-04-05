import React, { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { Button, TextField } from "@mui/material";
init(process.env.REACT_APP_userID);

function ContactMe() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const bodyObj = {
      user_name: userName,
      user_email: email,
      message: message,
    };
    emailjs
      .sendForm(
        process.env.REACT_APP_serviceID,
        process.env.REACT_APP_templateID,
        form.current,
        process.env.REACT_APP_userID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section>
      <div className="info-container">
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
            label="Name"
            name="user_name"
          />
          <TextField
            type="email"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
          />
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            multiline
            maxRows={4}
            label="Message"
          />
          <Button type="submit" variant="contained">
            Send
          </Button>
        </form>
        <p>{process.env.REACT_APP_serviceID}</p>
        <p>{process.env.REACT_APP_templateID}</p>
        <p>{process.env.REACT_APP_userID}</p>
      </div>
    </section>
  );
}

export default ContactMe;
