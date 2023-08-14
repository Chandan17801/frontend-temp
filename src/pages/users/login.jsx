import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  // Chnage handler
  const handleChnage = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  //   submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
  };
  return (
    <section>
      <form>
        <input type="text" name="email" onChange={handleChnage} />
        <input type="password" name="password" onChange={handleChnage} />
        <input type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
