import { useState } from "react";
import { Link } from "react-router-dom"

import Button from "../components/Button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handlePassword2Change(){
    setPassword2(e.target.value)
  }

  function handleFormSubmit(e){
    e.preventDefault()
  }

  return (
    <div className="bg-blue-50 h-screen">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={handlePasswordChange}
          />
        </label>
        <label htmlFor="password2">
          Confirm password
          <input
            type="password"
            value={password2}
            id="password2"
            name="password2"
            onChange={handlePassword2Change}
          />
        </label>
        <Button><input className="hover:cursor-pointer" type="submit"/></Button>
      </form>
      <Link to="/signin">SignIn</Link>

    </div>
  );
}
