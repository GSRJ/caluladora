import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container, Content, Row } from "./styles";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) =>
      prev === "0" ? `${number}` : `${prev}${number}`
    );
  };

  const handleOnClear = () => {
    window.location.reload();
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button
            label={"*"}
            onClick={() => {}}
          />
          <Button
            label={"/"}
            onClick={() => {}}
          />
          <Button
            label={"C"}
            onClick={handleOnClear}
          />
          <Button
            label={"Del"}
            onClick={() => {}}
          />
        </Row>
        <Row>
          <Button
            label={"7"}
            onClick={() => handleAddNumber("7")}
          />
          <Button
            label={"8"}
            onClick={() => handleAddNumber("8")}
          />
          <Button
            label={"9"}
            onClick={() => handleAddNumber("9")}
          />
          <Button
            label={"-"}
            onClick={() => handleAddNumber("")}
          />
        </Row>
        <Row>
          <Button
            label={"4"}
            onClick={() => handleAddNumber("4")}
          />
          <Button
            label={"5"}
            onClick={() => handleAddNumber("5")}
          />
          <Button
            label={"6"}
            onClick={() => handleAddNumber("6")}
          />
          <Button
            label={"+"}
            onClick={handleSumNumbers}
          />
        </Row>
        <Row>
          <Button
            label={"1"}
            onClick={() => handleAddNumber("1")}
          />
          <Button
            label={"2"}
            onClick={() => handleAddNumber("2")}
          />
          <Button
            label={"3"}
            onClick={() => handleAddNumber("3")}
          />
          <Button
            label={"="}
            onClick={() => {}}
          />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
