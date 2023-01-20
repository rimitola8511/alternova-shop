import styles from "./index.module.scss";
import ShopLogo from "../../assets/alternova.png";

export function Logo() {
  return <img className={styles.logo} src={ShopLogo} alt='Alternova' />;
}
