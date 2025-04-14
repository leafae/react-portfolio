import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.gif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.eduLists}>
          <li className={styles.eduList}>
            <div>
              <h2>Sunway University</h2>
              <h3>Bachelor of Information Systems (Hons) (Data Analytics)</h3>
              <ul>
                <li>March 2020 - September 2022</li>
                <li>CGPA: 3.33</li>
              </ul>
            </div>
          </li>
          <li className={styles.eduList}>
            <div>
              <h2>Sunway College</h2>
              <h3>Diploma in Information Technology</h3>
              <ul>
                <li>March 2018 - March 2020</li>
                <li>CGPA: 3.72</li>
              </ul>
            </div>
          </li>
          <li className={styles.eduList}>
            <div>
              <h3>SMK Kepong Baru</h3>
              <ul>
                <li>2013 - 2017</li>
                <li>SPM: 3 A's</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
