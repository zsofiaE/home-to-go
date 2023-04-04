import { ChangeEvent, useState } from "react";

const Example =() => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setInputText(e.target.value);

    console.log('value is:', e.target.value);
  };

  return (
    <div>
      <input    type="text" 
                id="inputText"
                onChange={handleChange} 
                value={inputValue} />

      {/* 👇 Use the input value from state */}
      <p>Your input: {inputValue}</p>
    </div>
  );
};

export default Example;