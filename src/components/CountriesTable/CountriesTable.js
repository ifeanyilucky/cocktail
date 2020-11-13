import {
  KeyboardArrowDown,
  KeyboardArrowDownRounded,
} from "@material-ui/icons";
import styles from "./CountriesTable.module.css";

const orderBy = (countries, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) =>
      a.population > b.population ? 1 : -1
    );
  }

  if (direction === "dsc") {
    return [...countries].sort((a, b) =>
      a.population > b.population ? -1 : 1
    );
  }

  return countries;
};

const CountriesTable = ({ countries }) => {
  const orderCountries = orderBy(countries, "dsc");
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
          <div className={styles.heading_arrow}>
            <KeyboardArrowDownRounded color="inherit" />
          </div>
        </button>
        <button className={styles.heading_population}>
          <div>Population</div>
          <div className={styles.heading_arrow}>
            <KeyboardArrowDownRounded color="inherit" />
          </div>
        </button>
      </div>
      {countries.map((country) => (
        <div className={styles.row}>
          <div className={styles.name}>{country.name}</div>
          <div className={styles.population}> {country.population} </div>
        </div>
      ))}
    </div>
  );
};

export default CountriesTable;
