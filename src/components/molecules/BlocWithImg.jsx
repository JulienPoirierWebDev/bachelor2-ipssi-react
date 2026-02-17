import styles from "./BlockWithImg.module.css";

const BlocWithImg = ({ slug, title, paragraph }) => {
  const imageForCSS = `url(${slug})`;
  return (
    <div className={styles.bloc} style={{ "--image": imageForCSS }}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    </div>
  );
};

export default BlocWithImg;
