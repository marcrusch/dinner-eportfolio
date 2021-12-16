import { useRouter } from "next/router";
import styles from "./nav.module.css";
import Image from "next/image";

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
              <Image
                src="https://piwigo.marcrusch.ch/upload/2021/12/13/20211213212541-4b2c1f14.png"
                height="75px"
                width="75px"
              />
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
