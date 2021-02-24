import styled from "styled-components";
export const Form = (props) => {
  return (
    <Search>
      <form onSubmit={props.getWord} className="input__wrapper">
        <i className="far fa fa-search" style={{ color: "#b3c5cd" }} />
        <input
          name="word"
          type="text"
          placeholder="Search for drinks..."
          className="input"
        />
        <br />
        <button type="submit" className="srchBtn">
          Search
        </button>
      </form>
    </Search>
  );
};

const Search = styled.div`
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 16px;
  }
  input::placeholder {
    color: #b3c5cd;
  }
  .input__wrapper {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    background-color: #2b1600;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding-left: 16px;
  }
  .srchBtn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 16px 10px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;
    font-weight: 400;

    &:hover {
    }
  }
`;
