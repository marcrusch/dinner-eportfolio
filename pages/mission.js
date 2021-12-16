import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import MissionItem from "../src/components/MissionItem/MissionItem";
import styles from "./mission.module.css";
import Head from "next/head";

export default function Mission() {
  return (
    <>
      <Head>
        <title>dinner.</title>
        <meta name="description" content="Simpler planning." />
        <link rel="icon" href="/" />
      </Head>
      <Header
        title="our mission."
        bgImage="https://piwigo.marcrusch.ch/i.php?/upload/2021/12/16/20211216164622-212c064f-la.jpg"
      />
      <main className={styles["mission-main"]}>
        <div className={styles["mission-main__content"]}>
          <MissionItem
            title="simplify planning."
            content="Planning events with dinner is very easy. Dinner combines a calendar, restaurant selection and payment. You can even order food directly through the app, so there's no need for a menu when you're in the restaurant."
          />
          <MissionItem
            title="cashless payment."
            content="Through dinner, payment is easier than ever. Automatically split the bill and pay directly through the app."
          />
          <MissionItem
            title="make people happy."
            content="Our main mission is to make people happy. It's more important than ever to get together with your loved ones. Wheter you want to go bowling, go to dinner or play snooker, dinner can do it all."
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
