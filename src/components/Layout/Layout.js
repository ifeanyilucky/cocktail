import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "World Ranks" }) => {
  const logoWorld = {
    fontWeight: 800,
    fontColor: "black",
    color: "green",
  };
  const logo = {
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "32px",
  };
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <h1 style={logo}>
            world<span style={logoWorld}>RANK</span>
          </h1>
        </header>

        <main className={styles.main}>{children}</main>
      </div>{" "}
      <footer className={styles.footer}>
        Ifeanyi Lucky https://twitter.com/ifeanyilucas
      </footer>
    </>
  );
};

export default Layout;
