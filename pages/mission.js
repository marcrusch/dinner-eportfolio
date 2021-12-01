import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import styles from "./mission.module.css";

export default function Mission() {
  return (
    <>
      <Header title="our mission." />
      <main className="mission">
        <div className={styles["mission-main"]}></div>
      </main>
      <Footer />
    </>
  );
}
