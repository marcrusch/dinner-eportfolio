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
        bgImage="https://piwigo.marcrusch.ch/upload/2021/12/14/20211214203302-b2c479bc.png"
      />
      <main className={styles["mission-main"]}>
        <div className={styles["mission-main__content"]}>
          <MissionItem
            title="simplify planning."
            content="Ich finde, es sieht sehr simpel und elegant aus, ich konnte also ein Logo nach meinen Vorschriften erstellen. Ich habe mir zuerst überlegt den Hintergrund des Logos weiss zu lassen, jedoch denke ich, dass die Einprägsamkeit eines Logos auch stark von der Farbe abhängt, also habe ich den Hintergrund eingefärbt. Nun finde ich, dass das Logo auch einprägsam ist.  
Ich werde jedoch an einigen Stellen, wo ein schlichteres Logo benötigt wird, folgendes Logo verwenden:"
          />
          <MissionItem
            title="simplify planning."
            content="Ich finde, es sieht sehr simpel und elegant aus, ich konnte also ein Logo nach meinen Vorschriften erstellen. Ich habe mir zuerst überlegt den Hintergrund des Logos weiss zu lassen, jedoch denke ich, dass die Einprägsamkeit eines Logos auch stark von der Farbe abhängt, also habe ich den Hintergrund eingefärbt. Nun finde ich, dass das Logo auch einprägsam ist.  
Ich werde jedoch an einigen Stellen, wo ein schlichteres Logo benötigt wird, folgendes Logo verwenden:"
          />
          <MissionItem
            title="simplify planning."
            content="Ich finde, es sieht sehr simpel und elegant aus, ich konnte also ein Logo nach meinen Vorschriften erstellen. Ich habe mir zuerst überlegt den Hintergrund des Logos weiss zu lassen, jedoch denke ich, dass die Einprägsamkeit eines Logos auch stark von der Farbe abhängt, also habe ich den Hintergrund eingefärbt. Nun finde ich, dass das Logo auch einprägsam ist.  
Ich werde jedoch an einigen Stellen, wo ein schlichteres Logo benötigt wird, folgendes Logo verwenden:"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
