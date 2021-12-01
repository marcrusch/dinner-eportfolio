import { useRouter } from "next/router";
import styles from "./nav.module.css";

export default function Nav({ variant }) {
  const router = useRouter();
  return (
    <>
      <div className={styles[`nav--${variant}`]}>
        <div className={styles["nav__item-container"]}>
          <div
            className={`${styles["nav__item"]} ${styles["nav__title-wrapper"]}`}
          >
            {variant === "header" && (
              <h2
                onClick={() => router.push("/")}
                className={styles["nav__title"]}
              >
                dinner.
              </h2>
            )}
            {variant === "footer" && (
              <img src="/dinner-logo.svg" height="75px" />
            )}
          </div>
          <div className={styles["nav__item"]}>
            <button
              className={styles["nav__item-button"]}
              onClick={() => router.push("/")}
            >
              home
            </button>
          </div>
          <div className={styles["nav__item"]}>
            <button
              className={styles["nav__item-button"]}
              onClick={() => router.push("/mission")}
            >
              mission
            </button>
          </div>
          <div className={styles["nav__item"]}>
            <button
              className={styles["nav__item-button"]}
              onClick={() => router.push("/technology")}
            >
              technology
            </button>
          </div>
          <div
            className={`${styles["nav__item"]} ${styles["nav__item--right"]}`}
          >
            dinner. created in 2021.
          </div>
        </div>
      </div>
    </>
  );
}
