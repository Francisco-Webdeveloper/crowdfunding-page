import styles from "./StatusCard.module.scss";
import { ProgressBar } from "react-bootstrap";

export const StatusCard = ({
  moneyBacked,
  totalBackers,
  daysLeft,
  progress,
}) => {
  return (
    <div className={styles.status}>
      <div className={styles.moneyBacked}>
        <h1>{moneyBacked}</h1>
        <p>of $100,000 backed</p>
      </div>
      <div className={styles.totalBackers}>
        <h1>{totalBackers}</h1>
        <p>total backers</p>
      </div>
      <div className={styles.daysLeft}>
        <h1>{daysLeft}</h1>
        <p>days left</p>
      </div>
      <ProgressBar
        now={progress}
        className={styles.progressBar}
        variant="info"
      />
    </div>
  );
};
