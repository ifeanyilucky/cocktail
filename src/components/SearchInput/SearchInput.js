import styles from "./SearchInput.module.css";
function SearchInput({ ...search }) {
  return (
    <div className={styles.wrapper}>
      <h1>O</h1>
      <input type="text" className={styles.input} {...search} />
    </div>
  );
}

export default SearchInput;
