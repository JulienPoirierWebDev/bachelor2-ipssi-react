import styles from "./container.module.css";

const Container = ({ children, type }) => {
  const maClasse = type === "blue" ? "blue" : "red";
  return <div className={styles[maClasse]}>{children}</div>;
};

export default Container;
