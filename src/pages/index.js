import React from "react";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

function Home({ countries }) {
  // console.log(countries);
  return (
    <div>
      <Layout>
        <div className={styles.count}>Found {countries.length} countries</div>
        <SearchInput placeholder="Filter by Name, Region, or Subregion" />
        <CountriesTable countries={countries} />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const countryData = `https://restcountries.eu/rest/v2/`;
  const res = await fetch(countryData);
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};

export default Home;
