import styles from "./SearchInput.module.css";
import SearchRounded from "@material-ui/icons/SearchRounded";
function SearchInput({ ...search }) {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input type="text" className={styles.input} {...search} />
    </div>
  );
}

export default SearchInput;
