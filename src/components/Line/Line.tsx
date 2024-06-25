import styles from "./Line.module.scss";

type LineProps = {
  className?: string;
};

export const Line = ({ className }: LineProps) => {
  return <div className={`${styles.line} ${className}`}></div>;
};
