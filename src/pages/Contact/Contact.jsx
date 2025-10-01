import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you, " + form.name);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          Send us your queries or feedback and we will get back to you as soon as possible.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>
          <button type="submit" className={styles.sendButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

