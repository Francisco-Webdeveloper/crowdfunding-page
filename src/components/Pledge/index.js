import styles from "./Pledge.module.scss";
import { motion } from "framer-motion";

export const Pledge = ({ pledgeAmount, onChange, name }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      className={styles.pledgeCard}
    >
      <p className={styles.pledgeTitle}>Enter your pledge</p>
      <div className={styles.pledgeAndSubmit}>
        <input
          type="text"
          pattern="[0-9]*"
          value={pledgeAmount}
          placeholder="$"
          onChange={onChange}
          className={styles.pledgeInput}
          name={name}
        />
        <button className={styles.pledgeButton}>Continue</button>
      </div>
    </motion.div>
  );
};
