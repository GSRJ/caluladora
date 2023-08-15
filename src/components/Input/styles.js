import { styled } from "styled-components";

export const InputContainer = styled.div`
  @font-face {
    font-family: Calculator;
    src: url("./fonts/Calculator.ttf");
  }

  width: 100%;
  height: 75px;
  background-color: #aaffaa;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  input {
    width: 100%;
    height: 75px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 50px;
    font-family: Calculator, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto;
    direction: rtl;
    padding: 0 10px;
  }
`;
