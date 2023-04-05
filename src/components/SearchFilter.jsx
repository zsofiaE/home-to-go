import { ChangeEvent, useState } from "react";
import Select from "React-select/async"

const SearchFilter =() => {
  const [inputText, setInputText] = useState("");

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     // 👇 Store the input value to local state
//     setInputText(e.target.value);

    const handleChange = event => {
    setInputText(event.target.value);


    console.log('value is:', event.target.value);
  };

  return (
    <div>
      <input    type="text" 
                id="inputText"
                placeholder="Search by City"
                onChange={handleChange} 
                value={inputText} />

      {/* 👇 Use the input value from state */}
      <p>Your input: {inputText}</p>
    </div>
  );
};

export default SearchFilter;