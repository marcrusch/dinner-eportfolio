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
        <link rel="icon" href="/dinner-logo.svg" />
      </Head>
      <Header title="technology." />
      <main className={styles["technology"]}>
        <TechnologyItem
          title="app."
          content="asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös"
          imgSrc="/react-native-logo.png"
          imageLeft
        />
        <TechnologyItem
          title="data storage."
          content="asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös"
          imgSrc="/firebase-logo.png"
        />
        <TechnologyItem
          title="payment."
          content="asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös klföjask fkasdkjflajsdfjlsdjkfl asklklaös asdjklfsd klföjask fkasdkjflajsdfjlsdjkfl asklklaös"
          imgSrc="/xrpledger.svg"
          imageLeft
        />
      </main>
      <Footer />
    </>
  );
}
