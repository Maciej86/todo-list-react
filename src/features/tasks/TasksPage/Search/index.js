import { useLocation, useNavigate } from "react-router-dom";
import Input from "../Input";
import searchQueryParamName from "../searchQueryParamName";
import { WrapperSearch } from "./styled";

const Search = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <WrapperSearch>
      <form>
        <Input
          type="text"
          value={query}
          onChange={onInputChange}
          placeholder="Filtruj zadania"
        />
      </form>
    </WrapperSearch>
  );
};

export default Search;
