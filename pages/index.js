import Head from "next/head";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import MainItem from "../src/components/MainItem/MainItem";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>dinner.</title>
        <meta name="description" content="Simpler planning." />
        <link rel="icon" href="/" />
      </Head>
      <Header
        title="Welcome."
        bgImage="https://piwigo.marcrusch.ch/upload/2021/12/16/20211216150937-a9fcc221.jpg"
      />
      <main>
        <MainItem variant="title" content="get together." />
        <MainItem
          variant="text"
          content="With dinner, it's easier than ever to get together with friends and family. Espiecially in times like these, maintaining relationships is extremely important. We created dinner to make it easier for people to meet and enjoy some quality time with their loved ones."
        />
        <MainItem variant="title" content="simpler payment." />
        <MainItem
          variant="text"
          content="Using the XRP Ledger, payment is now easier than ever. We are planning to work together with restaurants to have the ability to order and pay directly through the app."
        />
        <MainItem variant="title" content="save time." />
        <MainItem
          variant="text"
          content="Since planning events with dinner is so easy, you're able to save a lot of time. Restaurant selection, inviting your friends and payment can all be handled inside of dinner."
        />
        <div className={styles["video"]}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0AH6tkDCZ2k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}
