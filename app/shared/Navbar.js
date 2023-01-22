import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
function Navbar() {
  const routes = [
    { name: "Server", path: "/server" },
    { name: "Client", path: "/client" },
    { name: "StaticProps", path: "/staticProps" },
  ];
  return (
    <>
      {routes.map((r) => (
        <Link className={styles.navlinks} key={r.index} href={r.path}>
          {r.name}
        </Link>
      ))}
    </>
  );
}

export default Navbar;
