import styles from "./missionitem.module.css";

export default function MissionItem({ title, content }) {
  return (
    <>
      <div className={styles["mission-item"]}>
        <h3 className={styles["mission-item__title"]}>{title}</h3>
        <p className={styles["mission-item__content"]}>{content}</p>
      </div>
    </>
  );
}
