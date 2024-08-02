import React, { useState } from "react";

function Form() {
  const [inputData, setInputData] = useState("");
  const [responseData, setResponseData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulated response data
    const simulatedResponse = {
      is_success: true,
      user_id: "Ritik_Katiyar_29062004",
      email: "ritikkatiyar90@gmail.com",
      roll_number: "RA2111003010373",
      numbers: ["2", "4", "5", "92"],
      alphabets: [],
      highest_alphabet: [],
    };

    // Set the simulated response as the output
    setResponseData(JSON.stringify(simulatedResponse, null, 2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input JSON Data:
          <textarea
            value={inputData}
            onChange={handleInputChange}
            placeholder='Enter JSON like { "data": ["2", "4", "5", "92"] }'
            rows="4"
            cols="50"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {responseData && (
        <div>
          <h3>Response:</h3>
          <pre>{responseData}</pre>
        </div>
      )}
    </div>
  );
}

export default Form;
