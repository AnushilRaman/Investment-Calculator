import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, SetUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 0;

  function handleChange(inputIdentifier, newValue) {
    SetUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: + newValue
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero </p>}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  )
}

export default App
