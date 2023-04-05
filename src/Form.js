import React, { useState } from "react";
import { TextField, Autocomplete, Button } from "@mui/material";

const fruitOptions = ["apple", "banana", "cherry", "durian", "elderberry"];

const Form = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && fruit !== null) {
      setMessage(`Hello, ${name}! Your favorite fruit is ${fruit}.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        data-testid="name"
      />
      <Autocomplete
        options={fruitOptions}
        value={fruit}
        onChange={(event, value) => setFruit(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a fruit"
            data-testid="autocomplete"
          />
        )}
      />
      <Button type="submit" data-testid="button">
        Submit
      </Button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
