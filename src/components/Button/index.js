import { ButtonContainer } from "./styles";
export const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer
      onClick={onClick}
      className="App"
    >
      {label}
    </ButtonContainer>
  );
};
