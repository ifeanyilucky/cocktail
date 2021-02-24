import Head from "next/head";
const Layout = ({
  children,
  title = "Search drinks and cocktails from around the world.",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
};
export default Layout;
