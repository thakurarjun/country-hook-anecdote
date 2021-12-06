import React, { useState } from "react";
import { useField, useCountry } from "../src/hooks/index";

const Country = ({ country }) => {
  if (!country) {
    return (
      <div>
        {/* <strong>not found...</strong> */}
      </div>
    );
  }
  if (country.length === 0)
    return (
      <div>
        <strong>not found...</strong>
      </div>
    );
  let countries = country[0];
  if (!countries)
    return (
      <div>
        <strong>not found...</strong>
      </div>
    );
  return (
    <div>
      <h3>{countries.name} </h3>
      <div>capital {countries.capital} </div>
      <div>population {countries.population}</div>
      <img
        src={countries.flag}
        height="100"
        alt={`flag of ${countries.name}`}
      />
    </div>
  );
};

const App = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
