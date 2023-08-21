import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container, Content, Row } from "./styles";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState("");
  const [visor, setVisor] = useState("0");

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) =>
      prev === "0" ? `${number}` : `${prev}${number}`
    );
  };

  useEffect(() => {
    setVisor(currentNumber);
  }, [currentNumber]);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setVisor("0");
    setFirstNumber(null);
    setOperation("");
  };

  const handleSumNumbers = () => {
    let result;
    if (firstNumber === null) {
      result = Number(currentNumber);
    } else {
      result = firstNumber + Number(currentNumber);
    }
    setFirstNumber(result);
    setCurrentNumber("0");
    setVisor(result.toString());
    setOperation("+");
  };

  const handleSubtractNumbers = () => {
    let result;
    if (firstNumber === null) {
      result = Number(currentNumber);
    } else {
      result = firstNumber - Number(currentNumber);
    }
    setFirstNumber(result);
    setCurrentNumber("0");
    setVisor(result.toString());
    setOperation("-");
  };

  const handleMultiplyNumbers = () => {
    let result;
    if (firstNumber === null) {
      result = Number(currentNumber);
    } else {
      result = firstNumber * Number(currentNumber);
    }
    setFirstNumber(result);
    setCurrentNumber("0");
    setVisor(result.toString());
    setOperation("*");
  };

  const handleDivideNumbers = () => {
    let result;
    if (firstNumber === null) {
      result = Number(currentNumber);
    } else {
      result = firstNumber / Number(currentNumber);
    }
    setFirstNumber(result);
    setCurrentNumber("0");
    setVisor(result.toString());
    setOperation("/");
  };

  const handleDeleteLastNumber = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
  };

  const handleEquals = () => {
    let result;
    if (currentNumber !== "0" && operation === "+") {
      result = firstNumber + Number(currentNumber);
    } else if (currentNumber !== "0" && operation === "-") {
      result = firstNumber - Number(currentNumber);
    } else if (currentNumber !== "0" && operation === "*") {
      result = firstNumber * Number(currentNumber);
    } else if (currentNumber !== "0" && operation === "/") {
      result = firstNumber / Number(currentNumber);
    } else {
      result = Number(currentNumber);
    }
    setCurrentNumber(result.toString());
    setFirstNumber(result);
    setOperation("");
  };

  useEffect(() => {}, [currentNumber]);

  return (
    <Container>
      <Content>
        <Input value={visor} />
        <Row>
          <Button
            label={"*"}
            onClick={handleMultiplyNumbers}
          />
          <Button
            label={"/"}
            onClick={handleDivideNumbers}
          />
          <Button
            label={"C"}
            onClick={handleOnClear}
          />
          <Button
            label={"Del"}
            onClick={handleDeleteLastNumber}
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
            onClick={handleSubtractNumbers}
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
            onClick={handleEquals}
          />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
