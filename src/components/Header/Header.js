import Nav from "../Nav/Nav";
import styles from "./header.module.css";

export default function Header({ title }) {
  return (
    <>
      <div className={styles["header"]}>
        <Nav variant="header" />
        <div className={styles["header__hero"]}>
          <h1 className={styles["header__title"]}>{title}</h1>
        </div>
      </div>
    </>
  );
}
