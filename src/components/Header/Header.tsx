import Logo from "../../assets/img/Logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={`${styles.header__row} row`}>
          <div className={styles.header__left}>
            <ul className={styles.header__ul}>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </div>
          <div className={styles.header__center}>
            <a href="#">
              <img src={Logo} />
            </a>
          </div>
          <div className={styles.header__right}>
            <ul className={styles.header__ul}>
              <li>
                <a href="#">CART</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
