import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container, Content, Row } from "./styles";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState();

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) =>
      prev === "0" ? `${number}` : `${prev}${number}`
    );
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
  };

  const handleSum = () => {
    if (firstNumber === "0" || firstNumber === undefined) {
      setFirstNumber(currentNumber);
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      console.log(firstNumber);
      setCurrentNumber(String(sum));
      // TODO Parei na função soma e igual https://web.dio.me/lab/calculadora/learning/0197b510-9190-4598-8833-f6eb6f8c329b
    }
  };

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"*"} />
          <Button label={"/"} />
          <Button
            label={"C"}
            onClick={() => handleClear()}
          />
          <Button
            label={"0"}
            onClick={() => handleAddNumber("0")}
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
            onClick={() => handleSum()}
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
            onClick={() => handleAddNumber("")}
          />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
