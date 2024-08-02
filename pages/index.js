import React, { useState } from "react";
import Form from "../components/Form";
import Dropdown from "../components/Dropdown";

const Home = () => {
  const [data, setData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ["Alphabets", "Numbers", "Highest alphabet"];

  const handleDataReceived = (data) => {
    setData(data);
  };

  const renderResponse = () => {
    if (!data) return null;

    const response = {};
    if (selectedOptions.includes("Alphabets")) {
      response.alphabets = data.alphabets;
    }
    if (selectedOptions.includes("Numbers")) {
      response.numbers = data.numbers;
    }
    if (selectedOptions.includes("Highest alphabet")) {
      response.highest_alphabet = data.highest_alphabet;
    }

    return (
      <div>
        <h2>Response</h2>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div>
      
        <title>RA2111003010373</title>
      
      <h1>JSON Processor</h1>
      <Form onDataReceived={handleDataReceived} />
      {data && <Dropdown options={options} onChange={setSelectedOptions} />}
      {renderResponse()}
    </div>
  );
};

export default Home;
