import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title } from "../Title/Title";
import { StyledBudget, StyledHead } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <StyledHead>
        <Title label="budget app" />
        <CustomSelect />
      </StyledHead>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBudget>
  );
};
