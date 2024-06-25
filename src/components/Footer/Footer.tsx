import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`row ${styles.footer__row}`}>
        <div className={styles.footer__top}>
          <ul>
            <li>
              <a href={"#"} target={"_blank"}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href={"#"} target={"_blank"}>
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href={"#"} target={"_blank"}>
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__bottom}>
          <span>
            ©{" "}
            <a
              href={"https://azizjonmakhamadjonov.netlify.app/"}
              target={"_blank"}
            >
              fakef0rest
            </a>{" "}
            2021
          </span>
        </div>
      </div>
    </footer>
  );
};
