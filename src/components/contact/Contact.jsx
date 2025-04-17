import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [popup, setPopup] = useState("");

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("asdasdasdasd");

    emailjs
      .sendForm(
        "service_1e4o96h",
        "template_sl28tls",
        formRef.current,
        "eBLAwAvPtsiA572FR"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setPopup(`${text} copied to clipboard!`);
      setTimeout(() => setPopup(""), 2000); // Hide popup after 2 seconds
    });
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div
          className="item"
          variants={variants}
          onClick={() => copyToClipboard("9812598@gmail.com")}
        >
          <h2>9812598@gmail.com</h2>
          <span>Mail</span>
        </motion.div>
        <motion.div
          className="item"
          variants={variants}
          onClick={() => copyToClipboard("@korsoni")}
        >
          <h2>@korsoni</h2>
          <span>Telegram</span>
        </motion.div>
        <motion.div
          className="item"
          variants={variants}
          onClick={() => copyToClipboard("+7 (981) 724-86-99")}
        >
          <h2>+7 (981) 724-86-99</h2>
          <span>Phone</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <img
          src="/svg/contact-women-talking-svgrepo-com.svg"
          alt=""
          className="phoneSvg"
        />
        {popup && (
          <div className="popup">
            <span className="checkmark">✔</span> {popup}
          </div>
        )}
        {/* <motion.div
          className="svgContainer"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 2 }}
        >
          <img
            src="/svg/contact-women-talking-svgrepo-com.svg"
            alt=""
            className="phoneSvg"
          />
        </motion.div> */}

        {/* <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form> */}
      </div>
    </motion.div>
  );
};

export default Contact;
