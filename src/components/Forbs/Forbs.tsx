import ForbsImage from "../../assets/img/forbs.svg";
import styles from "./Forbs.module.scss";

export const Forbs = () => {
  return (
    <div className={styles.forbs}>
      <div className={styles.forbs__items}>
        <div className={styles.forbs__titlebox}>
          <img src={ForbsImage} />
        </div>
        <div className={styles.forbs__infobox}>
          <p>
            "This model addresses several limitations of its competitors, namely
            denim landfill waste and excessive water consumption required to
            grow new virgin cotton fibres."
          </p>
        </div>
        <div className={styles.forbs__buttonbox}>
          <button type={"button"}>
            <i className="fa-regular fa-circle"></i>
          </button>
          <button type={"button"}>
            <i className="fa-regular fa-circle"></i>
          </button>
          <button type={"button"}>
            <i className="fa-regular fa-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
