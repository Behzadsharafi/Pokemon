import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <h4 className={styles.footer}>
      &copy; Copyright Zad Sharafi {new Date().getFullYear()}
    </h4>
  );
};

export default Footer;
