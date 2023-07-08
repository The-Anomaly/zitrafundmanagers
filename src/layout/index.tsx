import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import styles from "./styles.module.scss";

interface LayoutProps extends NavbarProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  const apply = () => {};

  return (
    <>
      <Navbar active={active} apply={apply} />
      <main className={styles.main} >{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
