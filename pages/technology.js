import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Head from "next/head";
import TechnologyItem from "../src/components/TechnologyItem/TechnologyItem";
import styles from "./technology.module.css";

export default function Technology() {
  return (
    <>
      <Head>
        <title>dinner.</title>
        <meta name="description" content="Simpler planning." />
        <link rel="icon" href="/" />
      </Head>
      <Header
        title="technology."
        bgImage={
          "https://piwigo.marcrusch.ch/i.php?/upload/2021/12/14/20211214191110-7a133dd3-xl.png"
        }
      />
      <main className={styles["technology"]}>
        <TechnologyItem
          title="app."
          content="Dinner uses React Native as a framework to create both the iOS and Android Apps."
          imgSrc="https://piwigo.marcrusch.ch/_data/i/upload/2021/12/13/20211213210847-34398aed-la.png"
          imageLeft
        />
        <TechnologyItem
          title="data storage."
          content="Data storage is handled through google's firebase. Firebase has a wide variety of features which help us manage the data stored on the server."
          imgSrc="https://piwigo.marcrusch.ch/i.php?/upload/2021/12/13/20211213210848-ae2023f3-la.png"
        />
        <TechnologyItem
          title="payment."
          content="Through the XRP Ledger, dinner can guarantee very low transaction fees and fast processing."
          imgSrc="https://piwigo.marcrusch.ch/upload/2021/12/13/20211213211724-9f753bd8.png"
          imageLeft
        />
      </main>
      <Footer />
    </>
  );
}
