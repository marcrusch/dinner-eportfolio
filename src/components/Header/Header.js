import Nav from "../Nav/Nav";
import styles from "./header.module.css";

export default function Header({ title, bgImage }) {
  return (
    <>
      <div className={styles["header"]}>
        <Nav variant="header" />
        <div
          className={styles["header__hero"]}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className={styles["header__hero-overlay"]} />
          <h1 className={styles["header__title"]}>{title}</h1>
        </div>
      </div>
    </>
  );
}
