import React, { useEffect, useState } from "react";
import { login } from "../services/login";
import { setToken } from "../services/notes";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login({ username, password });
    setToken(user.token);
    window.localStorage.setItem("loggedReduxNote", JSON.stringify(user));
  };
  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          name="username"
          type="text"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          name="password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>login</button>
      </form>
    </>
  );
};

export default LoginForm;
