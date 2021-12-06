import styles from "./technologyitem.module.css";
import Image from "next/image";

export default function TechnologyItem({ title, content, imgSrc, imageLeft }) {
  return (
    <>
      <div className={styles["technology-item"]}>
        {imageLeft && (
          <>
            <div className={styles["technology-item__image-container"]}>
              <Image
                className={styles["technology-item__image"]}
                src={imgSrc}
                objectFit="contain"
                height="200%"
                width="200%"
              />
            </div>
            <div className={styles["technology-item__content-container"]}>
              <h3 className={styles["technology-item__content-title"]}>
                {title}
              </h3>
              <p className={styles["technology-item__content-text"]}>
                {content}
              </p>
            </div>
          </>
        )}
        {!imageLeft && (
          <>
            <div className={styles["technology-item__content-container"]}>
              <h3 className={styles["technology-item__content-title"]}>
                {title}
              </h3>
              <p className={styles["technology-item__content-text"]}>
                {content}
              </p>
            </div>
            <div
              className={styles["technology-item__image-container"]}
              style={{ textAlign: "right" }}
            >
              <Image
                className={styles["technology-item__image"]}
                src={imgSrc}
                objectFit="contain"
                height="200%"
                width="200%"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
