import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zi Han</h1>
        <p className={styles.description}>
          Former Data Engineer transitioning into frontend development.
          Currently learning and building responsive web interfaces with React
          and JavaScript. Passionate about UI/UX and eager to grow as a junior
          frontend developer.
        </p>
        <div className={styles.buttons}>
          <a href="mailto:hanzi0619@gmail.com" className={styles.button}>
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            View My Resume
          </a>
        </div>
      </div>
      <div className={styles.imgDiv}>
        <img
          src={getImageUrl("hero/avatarImage.png")}
          className={styles.heroImg}
          alt="Hero image of me"
        />
      </div>
      <div className={styles.topBlur} />
      {/* <div className={styles.btmBlur} /> */}
    </section>
  );
};
