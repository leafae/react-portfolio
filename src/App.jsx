import styles from "./App.module.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Education } from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
