import styles from "@/styles/Header.module.css";
import Image from "next/image";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={styles.header} id="header">
      <nav>
        <Image width={32} height={32} src="/logo.svg" alt="logo" />
        <h1>MAAS Contract Care (Pvt.) Ltd</h1>
        {/* <h1>Name</h1> */}
      </nav>
    </header>
  );
};

export default Header;
