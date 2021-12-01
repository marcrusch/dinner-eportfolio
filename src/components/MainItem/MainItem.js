import styles from "./mainitem.module.css";

export default function MainItem({ variant, content }) {
  return (
    <>
      <div className={styles["main-item"]}>
        {variant === "title" && (
          <>
            <div className={styles["main-item__title-child"]}>
              <h1 className={styles["main-item__title"]}>{content}</h1>
            </div>
            <div className={styles["main-item__child--small"]}></div>
          </>
        )}
        {variant === "text" && (
          <>
            <div className={styles["main-item__child--small"]}></div>
            <div className={styles["main-item__text-child"]}>
              <p className={styles["main-item__text"]}>{content}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
