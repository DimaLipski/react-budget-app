import { List } from "../List/List";
import { Search } from "../Search/Search";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title label="expenses" />
      <Search />
      <List />
    </StyledExpenses>
  );
};
