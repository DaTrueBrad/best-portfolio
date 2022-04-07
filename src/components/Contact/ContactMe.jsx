import React, { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { Button, TextField, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
      <div className="info-container" id="center">
        <div className="information">
          <div>
            <Typography variant="h2" color="text.main" align="center">
              Contact Me
            </Typography>
            <Typography variant="h5" color="text.main">
              If you wish to reach out to me for whatever reason, please use
              this form! It goes directly to my email, and I receive
              notifications.
            </Typography>
            <br></br>
            <Typography variant="h5" color="text.main">
              If you wish for me to contact you back, PLEASE ensure that your
              email address you provide is accurate. If you input it
              incorrectly, I am not all-knowing and cannot cipher your
              misspelled email to contact you, nor can I send out energy into
              the universe to "give you a sign."
            </Typography>
            <br></br>

          </div>
        </div>
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
            minRows={8}
            maxRows={8}
            label="Message"
          />
          <Button type="submit" variant="contained">
            Send
          </Button>
          <div className="row-container">
          <FacebookIcon sx={{ color: "#1778F2", fontSize: "66px" }} />
            <InstagramIcon sx={{ color: "#C0007A", fontSize: "66px" }} />
            <LinkedInIcon sx={{ color: "#0077b5", fontSize: "66px" }} />
          </div>

        </form>
        
      </div>
    </section>
  );
}

export default ContactMe;
