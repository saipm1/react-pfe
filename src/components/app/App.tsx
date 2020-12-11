import React from "react";

const App = () => {
  return (
    <>
      Welecome to the World of Profressional React!
      <br />
      Environment : {process.env.NODE_ENV}
      <br />
      Secret Key: {process.env.REACT_APP_SECRET_KEY}
    </>
  );
};

export default App;
