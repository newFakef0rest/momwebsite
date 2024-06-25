import styles from "./Offer.module.scss";

const Offer = () => {
  return (
    <div className={styles.offer}>
      <button type={"button"}>
        <i className="fa-solid fa-x"></i>
      </button>
      <span>Free EU shipping and returns.</span>
    </div>
  );
};
export default Offer;
