import Head from "next/head";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import MainItem from "../src/components/MainItem/MainItem";

export default function Home() {
  return (
    <>
      <Head>
        <title>dinner.</title>
        <meta name="description" content="Simpler planning." />
        <link rel="icon" href="/dinner-logo.svg" />
      </Head>
      <Header title="Welcome." />
      <main>
        <MainItem variant="title" content="get together." />
        <MainItem
          variant="text"
          content="With dinner, it's easier than ever to get together with friends and family. Espiecially in times like these, maintaining relationships is extremely important. We created dinner to make it easier for people to meet and enjoy some quality time with their loved ones."
        />
        <MainItem variant="title" content="simpler payment." />
        <MainItem
          variant="text"
          content="Using the XRP Ledger, payment is now easier than ever. Many restaurants already accept payment directly through the dinner app. If you're "
        />
        <MainItem variant="title" content="save time." />
        <MainItem
          variant="text"
          content="Ich finde, es sieht sehr simpel und elegant aus, ich konnte also ein Logo nach meinen Vorschriften erstellen. Ich habe mir zuerst überlegt den Hintergrund des Logos weiss zu lassen, jedoch denke ich, dass die Einprägsamkeit eines Logos auch stark von der Farbe abhängt, also habe ich den Hintergrund eingefärbt. Nun finde ich, dass das Logo auch einprägsam ist.  
Ich werde jedoch an einigen Stellen, wo ein schlichteres Logo benötigt wird, folgendes Logo verwenden:
"
        />
      </main>
      <Footer />
    </>
  );
}
