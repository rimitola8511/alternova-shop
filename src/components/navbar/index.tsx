import { Container } from "../container";
import { Logo } from "../logo";
import { ShoppingCartIcon } from "../shopping-cart-icon";

import styles from "./index.module.scss";

export function Navbar() {
  return (
    <nav className={styles.nav} role='navigation'>
      <div className={styles.nav__container}>
        <Logo />
        <ShoppingCartIcon />
      </div>
    </nav>
  );
}
