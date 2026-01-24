import { useState } from "react";

function Form() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <>
      <button onClick={() => setisLoggedIn(!isLoggedIn)}>
        {isLoggedIn?"logout":"login"}
      </button>

      {isLoggedIn && <h1>Dashboard</h1>}
    </>
  );
}

export default Form;
