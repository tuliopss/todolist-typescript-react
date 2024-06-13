import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <p>
        <span>ReactTs</span>
      </p>
      <a href='https://github.com/tuliopss'>GitHub</a>
    </footer>
  );
};

export default Footer;
