import Logo from "../assets/logo.svg";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={Logo} alt='um foguete, todo' />
    </header>
  );
}
