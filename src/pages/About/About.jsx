import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Pickify</h1>
        <p className={styles.paragraph}>
          Pickify is your ultimate destination for the latest product news, reviews,
          and insights. Our goal is to provide high-quality, well-researched content
          that helps consumers, enthusiasts, and businesses stay updated
          with the fast-evolving product world.
        </p>
        <p className={styles.paragraph}>
          We focus on electronics, fashion, home essentials, and emerging
          products. Our team of expert reviewers and contributors ensures that
          every article is accurate, engaging, and practical.
        </p>
        <p className={styles.paragraph}>
          Join us in exploring the exciting world of products and stay ahead
          with tips, guides, and insights that make a difference.
        </p>
      </div>
    </div>
  );
}

export default About;
